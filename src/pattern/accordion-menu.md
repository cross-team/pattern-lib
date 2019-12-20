---
title: Accordion Menu
date: 2019-12-20T20:52:49.060Z
category: Navigation
subcategory: Menus
caption: Vertical Accordion Menu
problem: >-
  User needs to navigate items while still being able to see main section
  headers.\

  The layout does not permit main section headers to be organized horizontally.
solution: >-
  Each main section header collapses and expands a list of items, usually when
  one panel is expanded the rest or collapsed, this depends on the use case.
usage: >-
  * Use when space does not allow to list all items.

  * Take into consideration space used when collapsed and when list with most
  items is open.
accessibility: >-
  * **Code header areas in the accordion as buttons**. Using a 'button' assures
  that accordions are usable with both screen readers and the keyboard.

  * Use aria-expanded on buttons to express an accordion’s default state.
  Buttons should state if they are expanded by default with
  aria-expanded="true". The aria-expanded="false" attributes will be added to
  other buttons when the accordion is initialized by the JavaScript.

  * Use unique ids. Each button has a unique name aria-controls="id" that
  associates the control to the appropriate region by referencing the controlled
  element’s id.

  * The accordion uses javascript to set the aria-hidden value of its content
  area. Each content area will have its aria-hidden attribute set to either true
  or false by the component, depending on its corresponding button’s
  aria-expanded attribute. To ensure that your content is accessible in the
  event that the JavaScript does not load or is disabled, you should not set
  aria-hidden="true" on any of your content areas.
assets:
  - asset:
      image: /assets/accordion-accessibility.png
references:
  - reference:
      url: 'https://designsystem.digital.gov/components/accordion/'
---

