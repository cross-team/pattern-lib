---
title: Pagination
date: 2019-12-21T17:58:00.865Z
category: Navigation
subcategory: Content
tags:
  - Pagination
  - Navigation
caption: Pagination
problem: The user needs to navigate a mass of data in manageable blocks.
solution: >-
  The user can select numbers, or section tabs to move through the content.


  The user can see where they are in the content (ex. page 1 of 10)


  The user can navigate the data, forwards and backwards. 


  The user can determine if they have already been on  a particular page based
  on the color of the links.
usage: >-
  * Use when it is unsuitable to display all the data on a single page/screen.

  * Use when the dataset is in some way ordered.

  * Do not use when you don’t want the user to pause for navigating to the next
  page.
accessibility: >-
  * Place the pager in a <nav> element when you can.

  * If you do not use a <nav> element, you need to add role="navigation" to the
  markup. Note: this role is implied when you use the <nav> element so it is a
  bit redundant to use both at the same time.

  * The markup includes an aria-label="pagination" to describe the type of
  navigation.

  * Add aria-current="page" to the link that points to the current page. This
  will tell AT that the focused link is pointing to the current page.

  * Add aria-disabled="true" to the link when the link is disabled.


  https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=131#navigation-mechanisms-location
assets:
  - asset:
      image: /assets/pagination1.jpg
references:
  - reference:
      url: 'http://ui-patterns.com/patterns/Pagination'
  - reference:
      url: >-
        https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination
---

