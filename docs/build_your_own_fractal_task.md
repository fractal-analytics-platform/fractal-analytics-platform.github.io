# Create a Fractal task

Fractal tasks are the core processing units of to build your workflows. Each Fractal task loads the data from one (or many) OME-Zarr(s) and applies processing to them. Fractal tasks are Linux command line executables. For the purpose of this demo, we will look at the Python implementation. You can think of a Fractal task as a Python function that knows how to process an OME-Zarr image and save the results back into that OME-Zarr image. With a bit of syntax sugar, this becomes a Fractal task you can then run from the web interface. To get an overview of the types of tasks, their API & how they provide information to Fractal server, check out the [Fractal Tasks Spec page](./tasks_spec.md). To learn more about how the manifest is built and the nuances of the task spec, check out the [fractal-task-tools package](https://fractal-analytics-platform.github.io/fractal-task-tools/usage/task_types/).

This page is all about building your own Fractal task. It comes down to 5 steps:

1. Create a repository for your tasks using the [fractal-tasks-template](https://github.com/fractal-analytics-platform/fractal-tasks-template).

2. Develop your Python function to process an OME-Zarr as desired & follow the Fractal API for task input & function outputs.

3. Update the task-list to generate a Fractal manifest in your package.

4. Package your task (locally or via [pypi](https://pypi.org/)).

5. Install your task on a given Fractal server.


This video is an old walkthrough of building Fractal tasks. While the conceptual steps remain the same and thus we leave this overview up for now, the tooling has evolved significantly to simplify task development. Thus, follow the instructions in the [fractal-tasks-template](https://github.com/fractal-analytics-platform/fractal-tasks-template) and specifically its [developer's guide](https://github.com/fractal-analytics-platform/fractal-tasks-template/blob/main/DEVELOPERS_GUIDE.md) over specifics shown in this video.


<iframe width="560" height="315" src="https://www.youtube.com/embed/nVYyX8ZkQXc?si=JEj93pf2HiN_zB7y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>
