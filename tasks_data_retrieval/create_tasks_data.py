import time
from pathlib import Path
import requests
import json
from zipfile import ZipFile
from typing import Any
from pydantic import BaseModel
from typing import Optional, Literal


DOWNLOAD_FOLDER = Path(__file__).parent / "downloads"
DOWNLOAD_FOLDER.mkdir(exist_ok=True)


class TaskReadV2(BaseModel):
    """
    Based on
    https://github.com/fractal-analytics-platform/fractal-server/blob/main/fractal_server/app/schemas/v2/task.py
    """

    name: str
    type: Literal["parallel", "non_parallel", "compound"]
    source: Optional[str] = None
    version: Optional[str] = None
    docs_info: Optional[str] = None
    docs_link: Optional[str] = None
    input_types: dict[str, bool]
    output_types: dict[str, bool]
    category: Optional[str] = None
    modality: Optional[str] = None
    authors: Optional[str] = None
    tags: list[str]

    class Config:
        extra = "forbid"


class TaskGroupReadV2(BaseModel):
    pkg_name: str
    version: Optional[str] = None
    task_list: list[TaskReadV2]


def parse_wheel_filename(wheel_path: str) -> dict[str, str]:
    """
    Given a wheel-file name or path, extract distribution and version.
    """
    wheel_filename = wheel_path.split("/")[-1]
    parts = wheel_filename.split("-")
    return dict(name=parts[0], version=parts[1])


def load_manifest_from_zip(wheel_path: str) -> dict[str, Any]:
    """
    Given a wheel file on-disk, extract the Fractal manifest.
    """
    with ZipFile(wheel_path) as wheel:
        namelist = wheel.namelist()
        try:
            manifest = next(
                name for name in namelist if "__FRACTAL_MANIFEST__.json" in name
            )
        except StopIteration:
            msg = f"{wheel_path} does not include __FRACTAL_MANIFEST__.json"
            raise ValueError(msg)
        with wheel.open(manifest) as manifest_fd:
            manifest_dict = json.load(manifest_fd)
    return manifest_dict


def download_file(url: str) -> str:
    file_name = url.split("/")[-1]
    response = requests.get(url, stream=True)
    file_path = (DOWNLOAD_FOLDER / file_name).as_posix()
    with open(file_path, "wb") as f:
        for data in response.iter_content():
            f.write(data)
    return file_path


def handle_pypi_project(pypi_project_url: str) -> dict[str, Any]:
    """
    Example: https://pypi.org/project/fractal-tasks-core
    """

    # Extract project_name
    parts = pypi_project_url.split("/")
    if parts[:4] != ["https:", "", "pypi.org", "project"]:
        raise ValueError(
            f"Invalid {pypi_project_url=}.\n"
            "Valid example: https://pypi.org/project/fractal-tasks-core"
        )
    project_name = parts[4]

    # Fetch and parse PyPI information
    pypi_api_url = f"https://pypi.org/pypi/{project_name}/json"
    res = requests.get(pypi_api_url)
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

    return dict(manifest=manifest, **info)


def handle_github_repository(github_url: str) -> dict[str, Any]:
    """
    Example:
    https://github.com/fractal-analytics-platform/fractal-lif-converters/
    """

    # Extract owner and repository
    parts = github_url.split("/")
    if parts[:3] != ["https:", "", "github.com"]:
        print(parts)
        raise ValueError(
            f"Invalid {github_url=}.\n"
            "Valid example: https://github.com/fractal-analytics-platform/fractal-lif-converters"
        )
    owner, repository = parts[3:5]

    # Fetch and parse GitHub information
    github_api_url = (
        f"https://api.github.com/repos/{owner}/{repository}/releases/latest"
    )
    headers = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    res = requests.get(github_api_url, headers=headers)
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

    return dict(manifest=manifest, **info)


def get_package_info(source: str) -> dict[str, Any]:
    if source.startswith("https://github.com"):
        return handle_github_repository(source)
    elif source.startswith("https://pypi.org"):
        return handle_pypi_project(source)
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
sources = [
    source
    for source in sources
    if not (source.startswith("#") or source == "")
]

TASK_GROUPS = []
for source in sources:
    t_start = time.perf_counter()
    print(f"START processing {source=}")
    try:
        task_list = []
        data = get_package_info(source)
        pkg_name = data["name"]
        pkg_version = data.get("version")
        pkg_task_list = data["manifest"]["task_list"]
        for task in pkg_task_list:
            new_task = dict()
            for column_name in COLUMN_NAMES:
                new_task[column_name] = task.get(
                    column_name, COLUMN_DEFAULTS.get(column_name, None)
                )
            new_task["version"] = pkg_version
            new_task["type"] = _get_task_type(task)
            TaskReadV2(**new_task)
            task_list.append(new_task)

        task_group = dict(
            pkg_name=pkg_name,
            version=pkg_version,
            task_list=task_list,
        )
        ntasks = len(task_list)
    except Exception as e:
        print(f"ERROR, skip.\nOriginal error:\n{str(e)}")

    TaskGroupReadV2(**task_group)

    TASK_GROUPS.append(task_group)

    t_end = time.perf_counter()
    print(f"END processing {source=} - version={pkg_version}' - added {ntasks} tasks - elapsed {t_end-t_start:.3f} s.")
    print()

output_file = Path(__file__).parent / "tasks.json"
with output_file.open("w") as f:
    json.dump(TASK_GROUPS, f, indent=2)

DOWNLOAD_FOLDER.rmdir()
