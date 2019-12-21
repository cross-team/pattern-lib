---
title: Thumbnail
date: 2019-12-21T18:09:03.811Z
category: Navigation
subcategory: Content
tags:
  - Thumbnail
  - Navigation
caption: Thumbnail
problem: >-
  The user needs to browse multiple pictures and does not require high
  resolution to do so.
solution: >-
  User can browse images that are ordered identical to one another in a grid
  layout.


  Thumbnails may have different states to provide feedback to the user. This can
  be hover, selected, deselected, default, etc.
usage: >-
  * Use when you have a collection of images that you want to present to the
  user.

  * Use when downloading full-size versions of all of the images you want to
  present to the user will both take up much bandwidth but will also take a long
  time for the user to download.

  * Use when you want to allow the user to browse quickly through a collection
  of images.

  * Use when you want to give the user an impression of an image, movie or page
  before he or she decides to download the original.
accessibility: >-
  * Every <img> you add to your site needs to have an alt attribute. If the
  image is informational, set the alt equal to a descriptive alternative for
  that image.

  * If the image is decorative or redundant to adjacent text, set alt="", which
  conveys to assistive technology users that the image isn’t necessary for
  understanding the page.

  * Avoid using generic strings like photo, image, or icon as alt values, as
  they don’t communicate valuable content to the user. Be as descriptive as
  possible.

  * Make sure any text in images of text is at least 14 points and has good
  contrast with the background.

  * Success Criterion 1.1.1 Non-text Content (Level A): All non-text content
  that is presented to the user has a text alternative that serves the
  equivalent purpose.


  https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
assets:
  - asset:
      image: /assets/thumbnails1.jpg
  - asset:
      image: /assets/thumbnails2.png
references:
  - reference:
      url: >-
        https://a11y-style-guide.com/style-guide/section-media.html#kssref-media-images
  - reference:
      url: 'http://ui-patterns.com/patterns/Thumbnail'
---

