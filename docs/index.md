---
layout: default
---

<style>
  .md-typeset h1,
  .md-content__button {
    display: none;
  }
</style>


Fractal is a framework developed at the [BioVisionCenter](https://www.biovisioncenter.uzh.ch/en.html) to process bioimaging data at scale in the OME-Zarr format and prepare the images for interactive visualization. Learn more about Fractal in our [bioRxiv preprint](https://www.biorxiv.org/content/10.64898/2026.03.05.709921v1).

![Fractal overview](https://github.com/user-attachments/assets/666c8797-2594-4b8e-b1d2-b43fca66d1df)

Fractal enables distributed workflows that convert TBs of image data into [OME-Zarr](https://ngff.openmicroscopy.org) files. Tasks are modular and can be provided by users to apply image processing and measurements. We provide a package of core processing tasks that include registration, segmentation and measurements. All tasks can be orchestrated by Fractal to run locally or on clusters to scale the image analysis. You can build & control Fractal workflows via the web client or the Fractal command line client.

<iframe width="560" height="315" src="https://www.youtube.com/embed/uhv4rSc_6gs?si=K8wueHbpGkPFmbkK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The resulting pyramidal OME-Zarr files enable interactive visualization in different modern viewers like [ViZarr](https://github.com/BioNGFF/vizarr), [MoBIE](https://imagej.net/plugins/mobie) and [napari](https://napari.org/stable/).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DfhRF1OW5CE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Fractal components

Fractal is made of different components, including a server/client architecture, a web client, a set of core tasks for image processing, and many more optional components.

|  **Component** 	|                                  **GitHub Repository**                                 	|                                      **Documentation**                                     	|                                **Package**                                	|
|:--------------:	|:--------------------------------------------------------------------------------------:	|:------------------------------------------------------------------------------------------:	|:-------------------------------------------------------------------------:	|
|   **server**   	|     [fractal-server](https://github.com/fractal-analytics-platform/fractal-server)     	|     [fractal-server docs](https://fractal-analytics-platform.github.io/fractal-server)     	|     [fractal-server on PyPI](https://pypi.org/project/fractal-server)     	|
|   **client**   	|     [fractal-client](https://github.com/fractal-analytics-platform/fractal-client)      	|       [fractal-client docs](https://fractal-analytics-platform.github.io/fractal-client)      |     [fractal-client on PyPI](https://pypi.org/project/fractal-client)     	|
|  **web client**  	|        [fractal-web](https://github.com/fractal-analytics-platform/fractal-web)          	|        [fractal-web docs](https://fractal-analytics-platform.github.io/fractal-web)           |                                     -                                     	|
| **core tasks** 	| [fractal-tasks-core](https://github.com/fractal-analytics-platform/fractal-tasks-core) 	| [fractal-tasks-core docs](https://fractal-analytics-platform.github.io/fractal-tasks-core) 	| [fractal-tasks-core on PyPI](https://pypi.org/project/fractal-tasks-core) 	|
| **data service** 	| [fractal-data](https://github.com/fractal-analytics-platform/fractal-data) 	| - 	| - 	|
| **feature explorer** 	| [fractal-feature-explorer](https://github.com/fractal-analytics-platform/fractal-feature-explorer) 	| - 	| - 	|


## Status

Fractal is under active development. You can learn more about the platform and its different use cases in our [bioRxiv preprint](https://www.biorxiv.org/content/10.64898/2026.03.05.709921v1). There are [over 100 publicly available Fractal tasks](fractal_tasks.md), covering OME-Zarr conversion from a diversity of microscopes, image preprocessing, a large variety of segmentation approaches, object quantification, multiplexed registration and much more. Follow along on the github repositories above and feel free to open issues.

## Build your own task
You can easily add your own task to Fractal. Fractal can run Linux executables that follow its task API, as defined in the [task building documentation](build_your_own_fractal_task.md). 

## Examples

Example datasets and workflows are publicly available:

* Example output data from Fractal in the OME-Zarr format can be found here: [Small dataset: 10.5281/zenodo.10257149](https://doi.org/10.5281/zenodo.10257149), [larger dataset: 10.5281/zenodo.10257532](https://doi.org/10.5281/zenodo.10257532)
* Example input datasets can be found here: [Small Fractal dataset for automated testing & task development](https://zenodo.org/records/8287221), [Larger example input data for Fractal](https://doi.org/10.5281/zenodo.7057076).
* Additional example workflows can be found in the [fractal-demos repository](https://github.com/fractal-analytics-platform/fractal-demos) in the `examples` folder.

## Contributors and license

The Fractal project is developed by the [BioVisionCenter](https://www.biovisioncenter.uzh.ch/en.html) at the University of Zurich, who contracts [eXact lab s.r.l.](https://www.exact-lab.it/en/) for software engineering and development support.

Unless otherwise stated in each individual module, all Fractal components are released according to a BSD 3-Clause License, and Copyright is with the BioVisionCenter at the University of Zurich.
