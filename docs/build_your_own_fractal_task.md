# Build a Fractal task

Fractal tasks are the core processing units of to build your workflows. Each Fractal task loads the data from one (or many) OME-Zarr(s) and applies processing to them. Fractal tasks are Linux command line executables. For the purpose of this demo, we will look at the Python implementation. You can think of a Fractal task as a Python function that knows how to process an OME-Zarr image and save the results back into that OME-Zarr image. With a bit of syntax sugar, this becomes a Fractal task you can then run from the web interface. To understand the types of tasks, their API & how they provide information to Fractal server, check out the [V2 Tasks page](https://fractal-analytics-platform.github.io/version_2/tasks/). 

This page is all about building your own Fractal task. It comes down to 5 steps:  

1. Create a repository for your tasks using the [fractal-tasks-template](https://github.com/fractal-analytics-platform/fractal-tasks-template).  

2. Develop your Python function to process an OME-Zarr as desired & follow the Fractal API for task input & function outputs.  

3. Update the task-list to generate a Fractal manifest in your package.  

4. Package your task (locally or via [pypi](https://pypi.org/)).  

5. Install your task on a given Fractal server.  


This video walks you through all those steps for how to implement a custom Fractal task that does image-labeling based on a user-defined threshold.

TBD insert REAL video

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mEDHh9Kkdmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

If you prefer to follow a written guide, follow the instructions in the README of [fractal-tasks-template](https://github.com/fractal-analytics-platform/fractal-tasks-template).
