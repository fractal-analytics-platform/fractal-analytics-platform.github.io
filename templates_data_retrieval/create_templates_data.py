# noqa: D100
import glob
import json
from pathlib import Path

data = []
id_map = {}

template_id = 0
root = Path(__file__).parent
for file in sorted(glob.glob((root / "raw/*json").as_posix())):
    with open(file) as f:
        template_id += 1
        id_map[str(template_id)] = Path(file).name
        template = json.load(f)
        template_name: str = template["name"]
        template_version: int = template["version"]
        data_index = next(
            (
                ind
                for ind, group in enumerate(data)
                if group["template_name"] == template_name
            ),
            None,
        )
        if data_index is None:
            data.append(
                {
                    "template_name": template_name,
                    "templates": [
                        {
                            "template_id": template_id,
                            "template_version": template_version,
                        }
                    ],
                }
            )
        else:
            data[data_index]["templates"].append(
                {
                    "template_id": template_id,
                    "template_version": template_version,
                }
            )

for group in data:
    group["templates"] = sorted(
        group["templates"],
        key=lambda x: x["template_version"],
        reverse=True,
    )

with open(root / "template_id_map.json", "w") as f:
    json.dump(id_map, f, indent=2)
with open(root / "templates.json", "w") as f:
    json.dump(data, f, indent=2)
