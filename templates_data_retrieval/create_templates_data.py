import glob, json


data = []
id_map = {}

template_id = 0
for file in sorted(glob.glob("raw/*json")):
    with open(file) as f:
        template_id += 1
        id_map[str(template_id)] = file
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
                dict(
                    template_name=template_name,
                    templates=[
                        dict(
                            template_id=template_id,
                            template_version=template_version,
                        )
                    ],
                )
            )
        else:
            data[data_index]["templates"].append(
                dict(
                    template_id=template_id,
                    template_version=template_version,
                )
            )

for group in data:
    group["templates"] = sorted(
        group["templates"],
        key=lambda x: x["template_version"],
        reverse=True,
    )

with open("template_id_map.json", "w") as f:
    json.dump(id_map, f, indent=2)
with open("templates.json", "w") as f:
    json.dump(data, f, indent=2)
