# /// script  # noqa: D100
# dependencies = [
#   "pydantic>=2.13,<2.1
# ]
# ///

import json
from pathlib import Path
from typing import Annotated

from pydantic import RootModel
from pydantic import StringConstraints

NonEmptyStr = Annotated[
    str,
    StringConstraints(min_length=1, strip_whitespace=True),
]


_SetThreeStringsTuple = set[
    tuple[
        NonEmptyStr,
        NonEmptyStr,
        NonEmptyStr,
    ]
]


class _CoreInfoSet(RootModel):
    """Set of `(pkg_name, version, task_name)` tuples."""

    root: _SetThreeStringsTuple


def _read_set_from_file(path: Path | None) -> _SetThreeStringsTuple:
    """Read a file (if any) and parse into a set of core-task info items."""
    json_data = path.read_text() if path else "[]"
    return _CoreInfoSet.model_validate_json(json_data).root


json_path = Path(__file__).parent / "list.json"

print(f"Reading core-tasks list from {json_path}.")
text_content = json_path.read_text()

print(f"Loading JSON from {json_path}")
json_content = json.loads(text_content)

print(f"Validating contents of {json_path}")
validated_core_info_set = _CoreInfoSet(json_content)


print("Validate round trip")
pre = json.dumps(sorted(json_content))
post = json.dumps(sorted(validated_core_info_set.root))
if pre != post:
    print("Pre:")
    print(json.dumps(sorted(json_content), indent=2))
    print("Post:")
    print(json.dumps(sorted(validated_core_info_set.root), indent=2))
    raise ValueError("Inconsistent round trip.")

print("All OK.")
