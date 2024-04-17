---
layout: default
---

# Tasks

> **WARNING: This page is still in-progress, its contents may change based on the latest developments.**

Fractal 2.0 brings a big refactor to the task architecture to make tasks more flexible and allow for building more complex workflows, while also simplifying the task API. This page is meant to give an overview over the different types of Fractal tasks, their input and output API and the elements that go into the Fractal task list. It also highlights some of the uses of the new Image List, where each OME-Zarr image can have types and attributes. The new Image List supports flexible filters set both in the task manifest as well as in Fractal workflows.
Task Types


There are 3 types of tasks in Fractal V2: parallel tasks, non-parallel tasks & compound tasks.

1. Parallel tasks: Task is written to process a single OME-Zarr image and meant to be run in parallel across many OME-Zarr images. A typical scenario for compute tasks that don’t need special input handling or subset parallelization
2. Non-parallel tasks: Task that processes a list of images. Only runs as a single job. Useful to handle image-list updates and validation of Zarr collections (like Import OME-Zarr)
3. Compound tasks: New Task type that runs a non-parallel task first, which provides a custom parallelization list to a parallel compute task. An example are registration tasks that need to run across multiple Zarr images, but parallelize over wells of a multi-well plate. The init task is like a non-parallel task, but provides the parallelization list as output. The compute task is like a parallel task, but it takes an extra init_args dictionary as input from the init task.

## Input API

### Parallel tasks:

Fractal parallel tasks take a single string `zarr_url` as input. The `zarr_url` contains the full path to the zarr file to be processed. We currently just support paths on filesystems, not S3 urls.
`zarr_url` is a reserved keyword argument: when running tasks through Fractal server, the server takes care to pass the correct `zarr_url` value to the parallel task (based on filtering the image list) .
Tasks can also take an arbitrary list of additional arguments that are specific to the task function and that the user can set.

### Non-parallel tasks:

Fractal non-parallel tasks take a list of strings called `zarr_urls` and a string `zarr_dir` as input. `zarr_urls` contains the full paths to the zarr files to be processed and it is a. We currently just support paths on filesystems, not S3 urls. `zarr_dir` is typically the base directory into which Zarr files will be written by tasks and is mostly used by converters.
Both `zarr_urls` and `zarr_dir` are reserved keyword arguments: when running tasks through Fractal server, the server takes care to pass the correct filtered list `zarr_urls` and the correct `zarr_dir` to the non-parallel task.
Tasks can also take an arbitrary list of additional arguments that are specific to the task function and that the user can set.

### Compound tasks

Compound tasks consist of an init part (similar to the non-parallel task) and a compute part (similar to the parallel task).
The init part has the same Input API as the non-parallel task (`zarr_urls` and `zarr_dir`), but provides the parallelization list for the compute part as an output.
The compute part takes `zarr_url` and an extra `init_args` dictionary input argument (which is coming from the parallelization_list).

## Output API
Tasks can optionally return updates to the image list (all tasks except the init phase of a Compound task) or a parallelization list (just the init phase of a compound task). The output of a task is always a task_output dictionary.

Tasks that create new images or edit relevant image properties need to provide an image_list_updates list of dictionaries as part of the task_output so the server can update its metadata about that image.

Task_outputs with image list updates are returned as a dictionary that contains the key `image_list_updates` and a list containing the updates to individual images. The updates need to be for unique zarr_urls and each update needs to contain the `zarr_url` of the image it’s providing an update for. Additionally, they can provide an origin key, an attributes key and a types key.
The `origin` key describes the `zarr_url` of another image already in the image list and will take the existing attributes and types from that image.
Attributes and types can also be directly set by a task.

Here’s an example of its structure:
```python
{
	"image_list_updates" = [
		{
			"zarr_url": "/path/to/my_zarr.zarr/B/03/0_processed",
			"origin": "/path/to/origin_zarr.zarr/B/03/0",
			"attributes": {
				"plate": "plate_name",
				"well": "B03"
			},
			"types": {
				"is_3D": True
			}
		}
	]
}
```

Parallelization lists provide the zarr_urls, as well as additional arbitrary arguments as an init_args dictionary. Parallelization lists are provided in the following structure:
FIXME: format code
{
"parallelization_list" = [
	{
"zarr_url": "/path/to/my_zarr.zarr/B/03/0",
"init_args": {
	"arbitrary_arg": "value"
}
}
]
}


## Fractal Task List (=> Manifest)
A package that provides Fractal tasks needs to contain a manifest that describes these tasks.
Fractal-tasks-core and fractal-tasks-template offer a simplified way to generate this manifest, based on a task list written in Python.
For instance if the task package `my-pkg` is based on the template, the task list is in `src/my-pkg/dev/task_list.py` and includes entries like
```
TASK_LIST = [
	NonParallelTask(
    	name="My non-parallel task",
    	executable="my_non_parallel_task.py",
    	meta={"cpus_per_task": 1, "mem": 4000},
	),
	ParallelTask(
    	name="My parallel task",
    	executable="my_parallel_task.py",
    	meta={"cpus_per_task": 1, "mem": 4000},
	),
	CompoundTask(
    	name="My compound task",
    	executable_init="my_task_init.py",
    	executable="my_actual_task.py",
    	meta_init={"cpus_per_task": 1, "mem": 4000},
    	meta={"cpus_per_task": 2, "mem": 12000},
	),
]
```
where the different task models refer to the different task types (see above). Given such task list, running the following command
``
python src/my-pkg/dev/create_manifest.py
```
generates a JSON file with the up-to-date manifest. Note that advanced usage may require a small customization of the create-manifest script.

More on this can be found e.g. at https://github.com/fractal-analytics-platform/fractal-tasks-template/blob/main/project/README.md.jinja (in progress).

