---
title: Image Zoom
date: 2019-12-24T17:10:38.550Z
category: Dealing with data
subcategory: Images
tags:
  - Image Zoom
  - Images
  - Dealing with data
caption: Image Zoom
problem: >-
  The user wants to zoom in on an image to view the details in a higher image
  resolution.
solution: >-
  Provide a mechanism that allows the user to zoom an image to view its details.




  From a server point of of view, an important goal is not to pre-load high
  resolution images before they are requested. This will help save bandwidth.




  An intuitive way of doing this is to allow the user to click a spot on a given
  image. As the user clicks the image to zoom, a higher resolution image is
  preloaded.




  Provide graphics or text about zooming in on the image; a bare image will not
  suggest zoom functionality to the user in itself.
usage: >-
  * Use when the normal image size displayed is not in high enough resolution to
  for the user to grasp the details in the image.

  * Use when downloading full-sized and detailed versions of all images takes up
  more bandwidth than you’re interested in sharing.
accessibility: 'https://webaim.org/techniques/images/#enlarging'
assets:
  - asset:
      image: /assets/imagezoom.jpg
references:
  - reference:
      url: 'http://ui-patterns.com/patterns/ImageZoom'
---

