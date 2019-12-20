---
title: Vertical Drop Down Menu
date: 2019-12-20T19:39:27.223Z
category: Navigation
subcategory: Menus
caption: Expandable drop down list for navigation
problem: >-
  The user needs to navigate the website where links can be organized into
  groups
solution: >-
  The user identifies the main section header they expect to find an item in. 
  (ex, Products - Laptops)\

  The user taps on the main section header and a list extends vertically,
  revealing the items related to that section.


  * On mouseover event item list is extended vertically.

  * On mouseout event item list collapses vertically, best practice is to add a
  delay of 200-300ms before hiding the box.

  * On hover to item change cursor image, to give user feedback that item is
  clickable.
usage: >-
  * Use when there are hierarchical sections of content that need a navigation
  structure.

  * Information must be grouped to a mental model the user will easily identify.
accessibility: See image below
assets:
  - asset:
      image: /assets/dropdown-menu-accessibility.png
  - asset:
      image: /assets/bs4-dropdown-tips.png
references:
  - reference:
      url: >-
        https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/
---

