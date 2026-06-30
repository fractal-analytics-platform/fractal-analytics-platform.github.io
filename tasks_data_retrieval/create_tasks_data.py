# noqa: D100
import json
import time
from pathlib import Path
from typing import Any
from typing import Literal
from urllib.parse import ParseResult
from urllib.parse import urlparse
from zipfile import ZipFile

import requests
from install_instructions import get_github_install_instructions
from install_instructions import get_pypi_install_instructions
from pydantic import BaseModel
from pydantic import ConfigDict

DOWNLOAD_FOLDER = Path(__file__).parent / "downloads"
DOWNLOAD_FOLDER.mkdir(exist_ok=True)


class TaskReadV2(BaseModel):
    """Customization of https://github.com/fractal-analytics-platform/fractal-server/blob/main/fractal_server/app/schemas/v2/task.py."""

    model_config = ConfigDict(extra="forbid")

    name: str
    type: Literal["parallel", "non_parallel", "compound"]
    source: str | None = None
    version: str | None = None
    docs_info: str | None = None
    docs_link: str | None = None
    input_types: dict[str, bool]
    output_types: dict[str, bool]
    category: str | None = None
    modality: str | None = None
    authors: str | None = None
    tags: list[str]
    install_instructions: str | None = None


class TaskGroupReadV2(BaseModel):  # noqa: D101
    pkg_name: str
    version: str | None = None
    task_list: list[TaskReadV2]


def parse_wheel_filename(wheel_path: str) -> dict[str, str]:
    """Given a wheel-file name or path, extract distribution and version."""
    wheel_filename = wheel_path.split("/")[-1]
    parts = wheel_filename.split("-")
    return {"name": parts[0], "version": parts[1]}


def load_manifest_from_zip(wheel_path: str) -> dict[str, Any]:
    """Given a wheel file on-disk, extract the Fractal manifest."""
    with ZipFile(wheel_path) as wheel:
        namelist = wheel.namelist()
        try:
            manifest = next(
                name for name in namelist if "__FRACTAL_MANIFEST__.json" in name
            )
        except StopIteration as e:
            msg = f"{wheel_path} does not include __FRACTAL_MANIFEST__.json"
            raise ValueError(msg) from e
        with wheel.open(manifest) as manifest_fd:
            manifest_dict = json.load(manifest_fd)
    return manifest_dict


def download_file(url: str) -> str:  # noqa: D103
    file_name = url.split("/")[-1]
    print(f"** Now get {url}")
    response = requests.get(url, stream=True, timeout=30)
    file_path = (DOWNLOAD_FOLDER / file_name).as_posix()
    with open(file_path, "wb") as f:
        for data in response.iter_content():
            f.write(data)
    return file_path


def handle_pypi_project(*, parsed_url: ParseResult) -> dict[str, Any]:
    """Example: https://pypi.org/project/fractal-tasks-core."""
    # Extract project_name
    project_name = parsed_url.path.strip("/").split("/")[1]

    # Fetch and parse PyPI information
    pypi_api_url = f"https://pypi.org/pypi/{project_name}/json"
    print(f"** Now get {pypi_api_url}.")
    res = requests.get(pypi_api_url, timeout=30)
    response_data = res.json()
    if not res.status_code == 200:
        raise RuntimeError(f"Invalid response from {pypi_api_url}: {res}")
    latest_version = response_data["info"]["version"]
    releases = response_data["releases"]
    latest_release = releases[latest_version]
    latest_release_wheel_assets = [
        item for item in latest_release if item["filename"].endswith(".whl")
    ]
    if len(latest_release_wheel_assets) > 1:
        raise ValueError(
            f"Found more than one wheel asset in release {latest_version}."
        )
    latest_release_wheel_asset = latest_release_wheel_assets[0]
    latest_release_wheel_asset_url = latest_release_wheel_asset["url"]

    # Download wheel and parse manifest
    wheel_path = download_file(latest_release_wheel_asset_url)
    info = parse_wheel_filename(wheel_path)
    manifest = load_manifest_from_zip(wheel_path)
    Path(wheel_path).unlink()

    install_instructions = get_pypi_install_instructions(
        project_name=project_name,
        version=info["version"],
    )

    return dict(
        manifest=manifest,
        install_instructions=install_instructions,
        **info,
    )


def handle_github_repository(*, parsed_url: ParseResult) -> dict[str, Any]:
    """Example: https://github.com/fractal-analytics-platform/fractal-lif-converters/."""
    # Extract owner and repository
    owner, repository = parsed_url.path.strip("/").split("/")

    # Fetch and parse GitHub information
    github_api_url = (
        f"https://api.github.com/repos/{owner}/{repository}/releases/latest"
    )
    headers = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    print(f"** Now get {github_api_url}")
    res = requests.get(github_api_url, headers=headers, timeout=30)
    if not res.status_code == 200:
        raise RuntimeError(f"Invalid response from {github_api_url}: {res}")
    assets = res.json()["assets"]
    wheel_assets = [asset for asset in assets if asset["name"].endswith(".whl")]
    if len(wheel_assets) > 1:
        raise ValueError("Found more than one wheel asset in latest GitHub release.")
    wheel_asset = wheel_assets[0]
    wheel_asset_browser_download_url = wheel_asset["browser_download_url"]

    # Download wheel and parse manifest
    wheel_path = download_file(wheel_asset_browser_download_url)
    info = parse_wheel_filename(wheel_path)
    manifest = load_manifest_from_zip(wheel_path)
    Path(wheel_path).unlink()

    install_instructions = get_github_install_instructions(
        wheel_name=Path(wheel_path).name,
        wheel_url=wheel_asset_browser_download_url,
    )

    return dict(
        manifest=manifest,
        install_instructions=install_instructions,
        **info,
    )


def get_package_info(source: str) -> dict[str, Any]:  # noqa: D103
    parsed_url = urlparse(source)
    if parsed_url.hostname == "github.com" and parsed_url.scheme == "https":
        return handle_github_repository(parsed_url=parsed_url)
    elif parsed_url.hostname == "pypi.org" and parsed_url.scheme == "https":
        return handle_pypi_project(parsed_url=parsed_url)
    else:
        raise ValueError(f"Invalid {source=}.")


def _get_task_type(
    task: dict[str, Any],
) -> Literal["parallel", "non_parallel", "compound"]:
    np = task.get("executable_non_parallel", None)
    p = task.get("executable_parallel", None)
    if p and np:
        return "compound"
    elif p and not np:
        return "parallel"
    elif np and not p:
        return "non_parallel"
    else:
        raise ValueError(f"Invalid task with {p=} and {np=}.")


COLUMN_NAMES = [
    "version",
    "name",
    "category",
    "modality",
    "tags",
    "input_types",
    "output_types",
    "docs_link",
    "docs_info",
]
COLUMN_DEFAULTS = {
    "input_types": {},
    "output_types": {},
    "tags": [],
}
COLUMN_TITLES = list(map(str.title, COLUMN_NAMES))


# Read and filter list of sources
sources_file = Path(__file__).parent / "sources.txt"
with sources_file.open("r") as f:
    sources = f.read().splitlines()
sources = [source for source in sources if not (source.startswith("#") or source == "")]

task_groups: list[dict[str, str | None | list[dict]]] = []
for source in sources:
    t_start = time.perf_counter()
    print(f"START processing {source=}")
    task_list = []
    data = get_package_info(source)
    pkg_name = data["name"]
    pkg_version = data.get("version")
    authors = data["manifest"].get("authors")
    install_instructions = data.get("install_instructions")
    pkg_task_list = data["manifest"]["task_list"]
    for task in pkg_task_list:
        new_task = {}
        for column_name in COLUMN_NAMES:
            new_task[column_name] = task.get(
                column_name, COLUMN_DEFAULTS.get(column_name, None)
            )
        new_task["version"] = pkg_version
        new_task["type"] = _get_task_type(task)
        new_task["authors"] = authors
        new_task["install_instructions"] = install_instructions
        TaskReadV2(**new_task)
        task_list.append(new_task)

    ntasks = len(task_list)

    task_groups.append(
        TaskGroupReadV2(
            pkg_name=pkg_name,
            version=pkg_version,
            task_list=task_list,
        ).model_dump()
    )

    t_end = time.perf_counter()
    print(
        f"END processing {source=} - "
        f"version={pkg_version}' - "
        f"added {ntasks} tasks - "
        f"elapsed {t_end - t_start:.3f} s."
    )
    print()


# grouping results
GROUPED_RESULT = []

for task_group in task_groups:
    if any(
        existing_pkg_name == task_group["pkg_name"]
        for existing_pkg_name, _ in GROUPED_RESULT
    ):
        raise ValueError(f"Duplicate package name found: {task_group['pkg_name']}")

    GROUPED_RESULT.append((task_group["pkg_name"], [task_group]))

# sort by package name
GROUPED_RESULT.sort(key=lambda x: x[0].lower())

output_file = Path(__file__).parent / "tasks.json"
with output_file.open("w") as f:
    json.dump(GROUPED_RESULT, f, indent=2)

DOWNLOAD_FOLDER.rmdir()
