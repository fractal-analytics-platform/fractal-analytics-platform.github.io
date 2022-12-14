---
layout: default
---

Fractal is a framework to process high-content imaging data at scale and prepare it for interactive visualization.

Fractal provides distributed workflows that convert TBs of image data into [OME-Zarr](https://ngff.openmicroscopy.org) files. The platform then processes the 3D image data by applying tasks like illumination correction, maximum intensity projection, 3D segmentation using [cellpose](https://cellpose.readthedocs.io/en/latest/) and measurements using [napari workflows](https://github.com/haesleinhuepf/napari-workflows). The pyramidal OME-Zarr files enable interactive visualization in the napari viewer.

![Fractal_Overview](https://user-images.githubusercontent.com/18033446/190978261-2e7b57e9-72c7-443e-9202-15d233f8416d.jpg)

OME-Zarr files can be interactively visualizated in napari. Here is an example using the newly-proposed async loading in [NAP4](https://github.com/napari/napari/pull/4905) and the [napari-ome-zarr plugin](https://github.com/ome/napari-ome-zarr):

![napari_plate_overview](https://user-images.githubusercontent.com/18033446/190983839-afb9743f-530c-4b00-bde7-23ad62404ee8.gif)


# Fractal components

Fractal is made of different components, including a server/client architecture and a set of core tasks for image processing.


|  **Component** 	|                                  **GitHub Repository**                                 	|                                      **Documentation**                                     	|                                **Package**                                	|
|:--------------:	|:--------------------------------------------------------------------------------------:	|:------------------------------------------------------------------------------------------:	|:-------------------------------------------------------------------------:	|
|   **server**   	|     [fractal-server](https://github.com/fractal-analytics-platform/fractal-server)     	|     [fractal-server docs](https://fractal-analytics-platform.github.io/fractal-server)     	|     [fractal-server on PyPI](https://pypi.org/project/fractal-server)     	|
|   **client**   	|            [fractal](https://github.com/fractal-analytics-platform/fractal)            	|                                         in progress                                        	|     [fractal-client on PyPI](https://pypi.org/project/fractal-client)     	|
|   **common**   	|     [fractal-common](https://github.com/fractal-analytics-platform/fractal-common)     	|                                              -                                             	|                                     -                                     	|
| **core tasks** 	| [fractal-tasks-core](https://github.com/fractal-analytics-platform/fractal-tasks-core) 	| [fractal-tasks-core docs](https://fractal-analytics-platform.github.io/fractal-tasks-core) 	| [fractal-tasks-core on PyPI](https://pypi.org/project/fractal-tasks-core) 	|

# Contributors and license

Unless otherwise stated in each individual module, all Fractal components are released according to a BSD 3-Clause License, and Copyright is with Friedrich Miescher Institute for Biomedical Research and University of Zurich.
Fractal was conceived in the Liberali Lab at the Friedrich Miescher Institute for Biomedical Research and in the Pelkmans Lab at the University of Zurich (both in Switzerland). The project lead is with [@gusqgm](https://github.com/gusqgm) & [@jluethi](https://github.com/jluethi). The core development is done under contract by [@mfranzon](https://github.com/mfranzon), [@tcompa](https://github.com/tcompa) & [jacopo-exact](https://github.com/jacopo-exact) from eXact lab S.r.l. <exact-lab.it>.


