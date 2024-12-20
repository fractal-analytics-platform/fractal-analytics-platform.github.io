# Deploy Fractal

Fractal is meant to be deployed to manage workflows on large cluster and currently has support for different modes of running on slurm clusters. It is deployed on Linux servers and also runs on macOS or Windows (by using Windows Subsystem Linux).
You can run a fully containerized local example that is useful for demos and testing purposes by following the instructions in the [fractal containers repository](https://github.com/fractal-analytics-platform/fractal-containers/tree/main/examples/full-stack) or by following along this walkthrough:

<iframe width="560" height="315" src="https://www.youtube.com/embed/g0s0a1F-2K4?si=-nE51acRS1Vnn2Vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

More detailed documentation about the configuration of the different Fractal components can be found in the [`fractal-server` documentation](https://fractal-analytics-platform.github.io/fractal-server/) and the [`fractal web` documentation](https://fractal-analytics-platform.github.io/fractal-web/).

-----

Fractal can also be deployed by manually setting up the server in a Python environment, configuring your own postgres database & setting up Fractal web from source. You can find some helpful material for this in the  [fractal-demos repository](https://github.com/fractal-analytics-platform/fractal-demos) (especially the examples/server section). We also have older video walkthroughs on manual setups available for both the [fractal-server](https://www.youtube.com/watch?v=mEDHh9Kkdmk) as well as [fractal-web](https://www.youtube.com/watch?v=f_HaiOVH-ig).
