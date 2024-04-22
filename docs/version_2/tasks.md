---
layout: default
---

# Tasks

> **WARNING: This page is still in-progress, its contents may change based on the latest developments.**

Fractal v2 brings a large refactor to the task architecture to make tasks more flexible and allow for building more complex workflows, while also simplifying the task API. This page gives an overview over the different types of Fractal tasks, their input and output API and the elements that go into the Fractal task list.

## Task Types

There are three types of tasks in Fractal V2: parallel tasks, non-parallel tasks & compound tasks.

1. A **parallel task** is written to process a single OME-Zarr image and meant to be run in parallel across many OME-Zarr images. This is the typical scenario for compute tasks that don't need special input handling or subset parallelization
2. A **non-parallel task** processes a list of images, and it only runs as a single job. It is useful to handle image-list updates and validation of Zarr collections (like Import OME-Zarr).
3. A **compound task** consists of an initialization (non-parallel) task, that provides a custom parallelization list to a subsequent (parallel) compute task. An example are registration tasks that need to run across multiple Zarr images, but parallelize over wells of a multi-well plate. The init task is like a non-parallel task, but it provides the parallelization list as output. The compute task is like a parallel task, but it takes an extra `init_args` dictionary as input from the init task.

## Input API

### Parallel tasks

The input arguments of a Fractal parallel tasks must include a `zarr_url` string argument. The `zarr_url` contains the full path to the zarr file to be processed. Only filesystem paths are currently supported, not S3 urls.
`zarr_url` is a reserved keyword argument: when running tasks through Fractal server, the server takes care to pass the correct `zarr_url` argument to the parallel task (based on filtering the image list).
Tasks can also take an arbitrary list of additional arguments that are specific to the task function and that the user can set.

### Non-parallel tasks

The input arguments of a Fractal non-parallel task must include a `zarr_urls` arguments (a list of strings) and `zarr_dir` argument (a single string). `zarr_urls` contains the full paths to the OME-Zarr images to be processed. We currently just support paths on filesystems, not S3 urls. `zarr_dir` is typically the base directory into which OME-Zarr files will be written by tasks and it is mostly used by converters.
Both `zarr_urls` and `zarr_dir` are reserved keyword arguments: when running tasks through Fractal server, the server takes care to pass the correct filtered list `zarr_urls` and the correct `zarr_dir` to the non-parallel task.
Tasks can also take an arbitrary list of additional arguments that are specific to the task function and that the user can set.

### Compound tasks

Compound tasks consist of an init part (similar to the non-parallel task) and a compute part (similar to the parallel task).
The init part has the same Input API as the non-parallel task (`zarr_urls` and `zarr_dir`), but it provides the parallelization list for the compute part as an output.
The compute part takes the `zarr_url` argument and an extra `init_args` dictionary argument (which is coming from the `parallelization_list` provided by the init task).

## Output API

Tasks can optionally return updates to the image list and/or [new dataset filters](./image_list.md#dataset-filters) (this is true for all tasks except the init phase of a compound tasks) or a parallelization list (just the init phase of a compound task). The output of a task is always a `task_output` dictionary. Note that this dictionary must be JSON-serializable, since it will be written to disk so that `fractal-server` can access it.

For tasks that create new images or edit relevant image properties, `task_output` must include an `image_list_updates` property so the server can update its metadata about that image.

Task_outputs with image list updates are returned as a dictionary that contains the `image_list_updates` key and a list containing the updates to individual images. The updates need to be for unique `zarr_url`s and each update needs to contain the `zarr_url` of the image it’s providing an update for. Additionally, they can provide an `origin` key, an `attributes` key and a `types` key. The `origin` key describes the `zarr_url` of another image already in the image list and will take the existing attributes and types from that image. Attributes and types can also be directly set by a task.

Here's an example of `task_output`:
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

The init part of a compound task must produe a parallelization lists, with elements having the `zarr_url` property as well as additional arbitrary arguments as an `init_args` dictionary.
Parallelization lists are provided in the following structure:
```python
{
    "parallelization_list": [
        {
            "zarr_url": "/path/to/my_zarr.zarr/B/03/0",
            "init_args": {"some_arg": "some_value"},
        }
    ]
}
```

## Task list and manifest

A package that provides Fractal tasks must contain a manifest (stored as a `__FRACTAL_MANIFEST__.json` file within the package), that describes the metadata of these tasks. `fractal-tasks-core` and `fractal-tasks-template` offer a simplified way to generate this manifest, based on a task list written in Python.

For instance if the task package `my-pkg` was created based on the template, the task list is in `src/my-pkg/dev/task_list.py` and includes entries like
```python
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
where the different task models refer to the [different task types](#task-types). Given such task list, running the following command
```bash
python src/my-pkg/dev/create_manifest.py
```
generates a JSON file with the up-to-date manifest. Note that advanced usage may require minor customizations of the create-manifest script.
