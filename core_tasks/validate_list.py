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
json_content = json.loads(text_content)
validated_core_info_set = _CoreInfoSet(json_content)
print("All good.")
post_validation_list = json.dumps(sorted(validated_core_info_set.root), sort_keys=True)
if post_validation_list != json.dumps(sorted(json_content), sort_keys=True):
    print(json.dumps(post_validation_list, indent=2, sort_keys=True))
    print(json.dumps(json_content, indent=2, sort_keys=True))
    raise ValueError
