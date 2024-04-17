---
layout: default
---

> **WARNING: This page is still in-progress, its contents may change based on the latest developments.**

While applying a processing workflow to a given dataset, Fractal keeps a list of all the OME-Zarr images it is processing.

## Images

Each entry in the image list is defined by a unique `zarr_url` property (the full path to the OME-Zarr image), and it may also include image types and image attributes.

### Image types

Image types are boolean properties that allow to split the image list into different sub-lists (e.g. the `is_3D` type for 3D/2D images, or the `illumination_corrected` type for raw/corrected images when illumination correction was not run in-place). Types can be set both by the task manifest (e.g. after an MIP task, the resulting images always have the type `is_3D` set to `False` - see [task-manifest section below](#dataset-filters)) as well as from within an individual task (see [task-API/output](#output-api) section below).

### Image attributes

Image attributes are scalar properties (strings, integers, floats or booleans). They are always defined from within individual tasks, and never by the task manifest. They allow selecting subsets of your data (e.g. select a given well, a given plate or a given multiplexing acquisition).

Fractal server uses the image list combined with filters (see [below](#dataset-filters)) to provide the right image URLs to tasks.

### Examples

* If one has an OME-Zarr HCS plate with 3 wells that contain an image each, the image list has 3 entries for those 3 images. Each image has attributes for plate & well, as well as a type `is_3D` (true or false).
* If one has an OME-Zarr HCS plate with 3 wells and each well has 3 multiplexing acquisition, there are 9 OME-Zarr images present. Therefore, the image list has 9 entries and those entries should have the acquisition attribute set.


![Fractal_Overview](../assets/tmp_image_list.png)

FIXME: replace fractal-web screenshot


## Filters

Before running a given task, Fractal prepares an appropriate image list by extracting the images that match with a given set of filters (that is, a set of specific values assigned to image types and/or image attributes). Filters can be defined for a dataset and/or for a workflow task. If a specific filter is set both for the dataset and for the workflow task, the workflow-task one takes priority.


### Dataset filters

There are multiple ways a dataset may have a given filter set:

1. I manually set it, by modifying the dataset `filters` property.
2. While writing the Fractal manifest for a task package, I include the `output_types` attribute for a given task. These types are automatically included in the dataset filters after the task is run. 
Examples:
    * An MIP task would have `output_types = {"is_3D": False}`: from this task onwards, the 2D images are processed (not the raw 3D images).
    * An illumination-correction task would have `output_types = {"illumination_corrected": True}`: from this task onwards, the registered images are processed (not the raw images).
4. When writing the code for a specific task, the task output, I can include a `filters` property, for either image attributes and/or types - see the [section on task outputs](./tasks.md#output-api).

Examples:

* My dataset currently has the type filter `{"is_3D": False}`, because I previously ran an MIP task. Subsequent tasks in the workflow will run on 2D images by default.
* My dataset currently has the attribute filter `{"well": "B03"}`, because I manually added it to the dataset (I just want to process a single well for the time being).
* My dataset currently has the attribute filter `{"acquisition": 1}`, because I manually added it to the dataset (I just want to process a single multiplexing acquisition).


### Workflow-task filters

I can manually set an additional input filter by modifying the workflow-task `input_filters` property. 

Examples:

* I may need a workflow that includes the MIP task but then switches back to 3D images in a later task. I can achieve this by setting `input_filters = {"is_3D": True}` for the relevant task, so that from this task onwards the 3D images is processed (and not the 2D ones).

### Additional validation

Task manifest may also specify the `input_types` of a given task. These are not used for filtering the image list, but rather to validate that the filtered image list is valid. If some images of the filtered list do not comply with `input_types`, the Fractal runner raises an error.

Examples:

* The illumination-correction task has `input_types={"illumination_corrected": False}`, which means it cannot run on images with type `illumination_correction=True`.
* The Apply Registration to Image task has `input_types={"registered": False}`, which means it cannot run on images with type `registered=True`.

> FIXME: Seeing applied filters during workflow submission & editing filters during submission - TBD