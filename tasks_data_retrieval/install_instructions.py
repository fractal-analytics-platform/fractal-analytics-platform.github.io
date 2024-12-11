INSTALL_INSTRUCTIONS_TITLE_1 = "## How to add this task to a Fractal instance"
INSTALL_INSTRUCTIONS_TITLE_2 = "## How to install in a Python environment"


def _get_default_template_pypi() -> str:
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        "Trigger a _PyPI_ task collection with package `__PROJECT_NAME__` and package version `__VERSION__`.",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        "```",
        'pip install "__PROJECT_NAME__==__VERSION__"',
        "```",
    ]
    template = "\n".join(lines) + "\n"
    return template


def _get_default_template_pypi_with_extra(extra: str) -> str:
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        f"Trigger a _PyPI_ task collection for package `__PROJECT_NAME__`, package version `__VERSION__` and package extras {extra}.",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        "```",
        f'pip install "__PROJECT_NAME__[{extra}]==__VERSION__"',
        "```",
    ]
    template = "\n".join(lines) + "\n"
    return template


def _get_default_template_wheel_url() -> str:
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        "1. Download the wheel file from [this link](__WHEEL_URL__),",
        "2. Trigger a _local_ task collection by uploading the wheel file.",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        "1. Download the wheel file from [this link](__WHEEL_URL__)",
        "2. `pip install __WHEEL_NAME__`",
    ]
    template = "\n".join(lines) + "\n"
    return template


def _get_default_template_wheel_url_with_extra(extra: str) -> str:
    lines = [
        INSTALL_INSTRUCTIONS_TITLE_1,
        "1. Download the wheel file from [this link](__WHEEL_URL__),",
        f"2. Trigger a _local_ task collection by uploading the wheel file, with package extras {extra}.",
        "",
        INSTALL_INSTRUCTIONS_TITLE_2,
        "1. Download the wheel file from [this link](__WHEEL_URL__)",
        f"2. `pip install \"__WHEEL_NAME__[{extra}]\"`",
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
    print(instructions)
    return instructions
