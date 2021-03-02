---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Markdown Cheatsheet"
linktitle: "markdown-cheatsheet"
summary: "Examples of markdown, rendering output, and where to use them"
date: 2020-12-15T09:14:27-08:00
lastmod: 2020-12-15T09:14:27-08:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  hugo:
    name: markdown
    parent: Hugo and Academic
    weight: 1
---


## Sections

To make a section, you can use `#` symbols for marking its `h#` depth by using
the following examples:

| h level | number of hashes | preview                  |
| ------- | ---------------- | ------------------------ |
| h1      | `#`              | <h1>Heading level 1</h1> |
| h2      | `##`             | <h2>Heading level 2</h2> |
| h3      | `###`            | <h3>Heading level 3</h3> |
| h4      | `####`           | <h4>Heading level 4</h4> |
| h5      | `#####`          | <h5>Heading level 5</h5> |
| h6      | `######`         | <h6>Heading level 6</h6> |

## Tables

```
| h level | number of hashes | preview                  |
| ------- | ---------------- | ------------------------ |
| h1      | `#`              | <h1>Heading level 1</h1> |
| h2      | `##`             | <h2>Heading level 2</h2> |
| h3      | `###`            | <h3>Heading level 3</h3> |
| h4      | `####`           | <h4>Heading level 4</h4> |
| h5      | `#####`          | <h5>Heading level 5</h5> |
| h6      | `######`         | <h6>Heading level 6</h6> |
```

## Links

```
[simple link](https://aaronaddleman.com/site/url/path)
[goto sections](#sections)
[link ref below][1]
[1]: https://aaronaddleman.com/this/can/be/at/the/bottom/of/the/document.md
```

[simple link](https://aaronaddleman.com/site/url/path)

[goto sections](#sections)

[link ref below][1]

[1]: https://aaronaddleman.com/this/can/be/at/the/bottom/of/the/document.md

## Images

[![Description of image](https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80 "Shiprock, New Mexico by Beau Rogers")](https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)

```
[![Description of image](https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80 "Shiprock, New Mexico by Beau Rogers")](https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)
```

## Code

Putting text inside of ` ``` ` and ` ``` ` will mark the text as code.
