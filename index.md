---
layout: default
---

Fractal is a framework to process high-content imaging data at scale and prepare it for interactive visualization.

![Fractal_Overview](assets/fractal_overview.jpg)

Fractal enables distributed workflows that convert TBs of image data into [OME-Zarr](https://ngff.openmicroscopy.org) files. Tasks are modular and can be provided by users to apply image processing and measurements. We provide a pacakge of core processing tasks that can apply  illumination correction, maximum intensity projection, 3D segmentation using [cellpose](https://cellpose.readthedocs.io/en/latest/) and measurements using [napari workflows](https://github.com/haesleinhuepf/napari-workflows). All tasks can be orchestrated by Fractal to run locally or on clusters to scale the image analysis. The resulting pyramidal OME-Zarr files enable interactive visualization in different modern viewers like [MoBIE](https://imagej.net/plugins/mobie) and [napari](https://napari.org/stable/). 

Here's an example of browsing a 23-well plate in napari:

{% include youtube.html id="DfhRF1OW5CE" %}

<br/>
  
# Fractal components

Fractal is made of different components, including a server/client architecture, a web client and a set of core tasks for image processing.

|  **Component** 	|                                  **GitHub Repository**                                 	|                                      **Documentation**                                     	|                                **Package**                                	|
|:--------------:	|:--------------------------------------------------------------------------------------:	|:------------------------------------------------------------------------------------------:	|:-------------------------------------------------------------------------:	|
|   **server**   	|     [fractal-server](https://github.com/fractal-analytics-platform/fractal-server)     	|     [fractal-server docs](https://fractal-analytics-platform.github.io/fractal-server)     	|     [fractal-server on PyPI](https://pypi.org/project/fractal-server)     	|
|   **client**   	|     [fractal-client](https://github.com/fractal-analytics-platform/fractal-client)      	|       [fractal-client docs](https://fractal-analytics-platform.github.io/fractal-client)      |     [fractal-client on PyPI](https://pypi.org/project/fractal-client)     	|
|  **web client**  	|        [fractal-web](https://github.com/fractal-analytics-platform/fractal-web)          	|        [fractal-web docs](https://fractal-analytics-platform.github.io/fractal-web)           |                                     -                                     	|
| **core tasks** 	| [fractal-tasks-core](https://github.com/fractal-analytics-platform/fractal-tasks-core) 	| [fractal-tasks-core docs](https://fractal-analytics-platform.github.io/fractal-tasks-core) 	| [fractal-tasks-core on PyPI](https://pypi.org/project/fractal-tasks-core) 	|


# Status

Fractal is under active development. We have tasks in our core repository and in multiple other tasks repositories. Our core repository contains a converter for Yokogawa CV7000/CV8000 image data as well as different processing tasks for illumination correction, maximum intensity projection, cellpose segmentation.
We're working with others to expand the number of compatible OME-Zarr converters (see e.g. [fractal-faim-hcs](https://github.com/jluethi/fractal-faim-hcs), which uses the faim-hcs converters for the MD Image Xpress) and additional processing tasks (e.g. the [scMultipleX package](https://github.com/fmi-basel/gliberal-scMultipleX), which contains a Fractal task to make many scikit-image based measurements in 2D and 3D). Follow along on the github repositories above and feel free to open issues.

# Build your own task
You can easily add your own task to Fractal. Start with the task [templates](https://github.com/fractal-analytics-platform/fractal-tasks-template) or read up on the [task building documentation](https://fractal-analytics-platform.github.io/fractal-tasks-core/custom_task/).

# Run your own Fractal server
Fractal runs locally on a laptop (tested both Linux, macOS and Windows with subsystem Linux) or on a linux server that submits jobs to a SLURM cluster. The documentation above describes the preconditions and the different configurations that can be changed. Fractal can be used via a command line client, as well as via a web client. To get started with Fractal, you can follow the setup in the [fractal-demos repository](https://github.com/fractal-analytics-platform/fractal-demos).

Here is a video walk-through for how to set up a local Fractal server:

{% include youtube.html id="mEDHh9Kkdmk" %}
<br/>

Once you have a Fractal server running, you can also access it via Fractal web. To do so, set up a Fractal web server as shown here:

{% include youtube.html id="f_HaiOVH-ig" %}
<br/>

If you prefer to follow a written guide, follow the instructions in the [server folder](https://github.com/fractal-analytics-platform/fractal-demos/tree/main/examples/server) to set up Fractal server. Once you have successfully installed and started the Fractal server, you can [install a fractal-client environment](https://github.com/fractal-analytics-platform/fractal-demos/tree/main/examples/00_user_setup) and interact with the Fractal server from there. To do so, follow the [instructions for the 01_cardio_tiny_dataset example](https://github.com/fractal-analytics-platform/fractal-demos/tree/main/examples/01_cardio_tiny_dataset). This also includes a link to a tiny dataset and instructions on how to run a full Fractal workflow on this dataset (which should run in under a minute).
To set up Fractal web, follow the instructions in the [Fractal web README](https://github.com/fractal-analytics-platform/fractal-web).
<br/>

# Examples

Additional example datasets and workflows are publicly available:
* Larger example input data for Fractal can be found here: [10.5281/zenodo.7057076](https://doi.org/10.5281/zenodo.7057076).
* Example output data from Fractal in the OME-Zarr format can be found here: [Small dataset: 10.5281/zenodo.8091756](https://doi.org/10.5281/zenodo.8091756), [larger dataset: 10.5281/zenodo.8091910](https://doi.org/10.5281/zenodo.8091910)
* Additional example workflows can be found in the [fractal-demos repository](https://github.com/fractal-analytics-platform/fractal-demos) in the `examples` folder. 

# Contributors and license

Unless otherwise stated in each individual module, all Fractal components are released according to a BSD 3-Clause License, and Copyright is with the BioVisionCenter at the University of Zurich. The Fractal web license remains to be set (we're discussing between permissive and copyleft open source licenses).

Fractal was conceived in the Liberali Lab at the Friedrich Miescher Institute for Biomedical Research and in the Pelkmans Lab at the University of Zurich (both in Switzerland) by [@jluethi](https://github.com/jluethi) and [@gusqgm](https://github.com/gusqgm). The Fractal project is now developed at the BioVisionCenter at the Unviersity of Zurich and the project lead is with [@jluethi](https://github.com/jluethi). The core development is done under contract by [eXact lab S.r.l.](https://www.exact-lab.it).
