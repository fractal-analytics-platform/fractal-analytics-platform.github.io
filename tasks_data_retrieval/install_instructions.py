import os
from urllib.parse import urlparse

INSTALL_INSTRUCTIONS_TITLE_1 = "**How to add this task to a Fractal instance:**\n"
INSTALL_INSTRUCTIONS_TITLE_2 = "**How to install this task in a Python environment:**\n"


def _get_default_template_pypi() -> str:
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        "Trigger a PyPI task collection with package `__PROJECT_NAME__` and package version `__VERSION__`",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        "Run `pip install \"__PROJECT_NAME__==__VERSION__\"`",
        "```",
    ]
    template = "\n".join(lines) + "\n"
    return template


def _get_default_template_pypi_with_extra(extra: str) -> str:
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        f"Trigger a PyPI task collection for package `__PROJECT_NAME__`, package version `__VERSION__` and package extras `{extra}`",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        f"Run `pip install \"__PROJECT_NAME__[{extra}]==__VERSION__\"`",
    ]
    template = "\n".join(lines) + "\n"
    return template


def _get_default_template_wheel_url() -> str:
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        "1. Download the wheel file from [this link](__WHEEL_URL__)",
        "2. Trigger a local task collection by uploading the wheel file",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        "1. Download the wheel file from [this link](__WHEEL_URL__)",
        "2. Run `pip install __WHEEL_NAME__`",
    ]
    template = "\n".join(lines) + "\n"
    return template


def _get_default_template_wheel_url_with_extra(extra: str) -> str:
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        "1. Download the wheel file from [this link](__WHEEL_URL__)",
        f"2. Trigger a local task collection by uploading the wheel file, with package extras `{extra}`",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        "1. Download the wheel file from [this link](__WHEEL_URL__)",
        f"2. Run `pip install \"__WHEEL_NAME__[{extra}]\"`",
    ]
    template = "\n".join(lines) + "\n"
    return template

def wheel_to_targz(url: str) -> str:
    parsed = urlparse(url)
    dirname, filename = os.path.split(parsed.path)

    # Replace .whl (and any wheel tags) with .tar.gz
    if filename.endswith(".whl"):
        base = filename.split("-py")[0]  # remove wheel-specific suffix
        version = base.split("-")[-1]
        pkg_name = "-".join(base.split("-")[:-1])
        new_filename = f"{pkg_name}-{version}.tar.gz"
    else:
        raise ValueError("URL does not point to a .whl file")

    new_path = f"{dirname}/{new_filename}"
    return parsed._replace(path=new_path).geturl()


def _get_default_pixi_installation_instructions(wheel_url: str) -> str:
    targz_url = wheel_to_targz(wheel_url)
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        f"1. Download the tar.gz file from [this link]({targz_url})",
        "2. Trigger a pixi task collection by uploading the tar.gz file to "
        "the pixi collection mode",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        f"1. Download the tar.gz file from [this link]({targz_url})",
        "2. Unpack the tar.gz archive",
        "3. Run the task from the archive via pixi",
    ]
    template = "\n".join(lines) + "\n"
    return template


def get_pypi_install_instructions(*, project_name: str, version: str) -> str:
    instructions = _get_default_template_pypi()
    if project_name == "fractal-tasks-core":
        instructions = _get_default_template_pypi_with_extra(extra="fractal-tasks")
    instructions = instructions.replace("__PROJECT_NAME__", project_name)
    instructions = instructions.replace("__VERSION__", version)
    print(instructions)
    return instructions


def get_github_install_instructions(*, wheel_name: str, wheel_url: str) -> str:
    instructions = _get_default_template_wheel_url()
    if wheel_name.startswith("scmultiplex"):
        instructions = _get_default_template_wheel_url_with_extra(extra="fractal-tasks")
    instructions = instructions.replace("__WHEEL_NAME__", wheel_name)
    instructions = instructions.replace("__WHEEL_URL__", wheel_url)
    if wheel_name.startswith("fractal-cellpose-sam") or wheel_name.startswith("fractal-ilastik"):
        instructions = _get_default_pixi_installation_instructions(wheel_url)
    print(instructions)
    return instructions
