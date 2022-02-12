---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Hugo and Academic"
linktitle: "Hugo and Academic"
summary: "Commands and notes of how to use Hugo and Academic that are useful to me"
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
    name: Hugo and Academic
    # parent: YourParentID
    weight: 1
---

## overview

Hugo makes for generating a static site with GoLang. This site is managed by Hugo
and a theme called Academic. While making these entries is pretty straight forward,
the task for remembering the right command always escapes me each time. So making
an entry to document the options seemed most fitting for my note taking.

## why academic

After having use this theme for a couple of months, I have found myself focusing less on the them and more on the entries of data. I really like how I can group posts with projects and write docs which I treat as my notes or progress on learning topics.

Another nice feature is when I want to start learning more about maths I can use this to show formulas by just using Markdown! Fantastic. Some day I hope to also gain more usage of writing content with OrgMode, but I dont see that happening soon.

## content types

1. post
3. project
4. talk
5. publication
6. docs
7. widget_page

### when to use them

There are some fields that are shared between all content types and to save some
typing and reading, here are the commons:


| field name | description                                          |
| :--        | :--                                                  |
| date       | when the project was created                         |
| lastmod    | when the project or page was last updated            |
| draft      | true/false controls if the content will be published |

### post

This type is best for making a blog post. Yes that sentance does sound redundant, but
usually this type is associated with a date and is pulled in to a filter when looking
across the entire site for posts.

```shell
hugo new --kind post post/name-of-post
```

What the fields mean:

| field name         | description                                                                                              |
| :--                | :--                                                                                                      |
| title              | the title of the post                                                                                    |
| subtitle           | the subtile of the post                                                                                  |
| summary            | the summary of the post displayed in list of posts                                                       |
| authors            | a list of authers who wrote the post (eg ["author1", "author2"] )                                        |
| tags               | a list of tags to register with (eg ["tag1", "tag2"] )                                                   |
| categories         | if tags were not enought... use categories, but same format as tags                                      |
| featured           | true/false controls if the post is listed in the featured module                                         |
| image              | information for the image of the post                                                                    |
| image:placement    | placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width                                  |
| image:caption      | text to be placed to bottom right of image                                                               |
| image:focal_point  | focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight |
| image:preview_only | true/false to just use the image for thumbnails.                                                         |
| projects           | list of projects to be associated with (eg ["project1", "project2"] )                                    |

---

### book

```shell
hugo new --kind book code/book-name/_index.md
hugo new --kind book code/book-name/section_name.md
```

### project

Summarizing a project is great for gathering multiple posts under one goal. By summarizing the project
you can associate posts to be listed under the "related" section of the project and post.

```shell
hugo new --kind docs project/name-of-project
```

What the fields mean:

The header matter of the project has a couple of nice features:

| field name           | description                                                |
| :--                  | :--                                                        |
| title                | this is the name of the project                            |
| linktitle            |                                                            |
| summary              | the summary of the project                                 |
| toc                  | true/false controls if the table of contents will show up  |
| type                 | docs (this should not be modified, per theme instructions) |
| menu                 | controls the sidebar content                               |
| menu:topLevel:name   | names pages sub-topics to be listed in the sidebar         |
| menu:topLevel:parent | set this to define the current pages parent                |
| menu:topLevel:weight | controls the sidebar position of the item                  |

### project menus

This was a little confusing at first, but with some little testing, it made sense and
here is my explanation:

The menu creates the top level post of the document or project. On that document will be
some header information. The menus on the left and right side are controlled by the
header section called `menu`.

The `toplevel` represents the current level of the document you are editing. **If this
is the `_index.md` file, then use a short name for the first level of the navigation.
As you continue making more files, you have the option of nesting these `toplevel` values
of the document by defining its `parent`.

### the rest...

I have yet to use the other types of content. Perhaps as I grow, I will come back to this
section and provide an update.

## Markdown


### Sections

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

### Tables

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

### Links

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

### Images

[![Description of image](https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80 "Shiprock, New Mexico by Beau Rogers")](https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)

```
[![Description of image](https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80 "Shiprock, New Mexico by Beau Rogers")](https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)
```

### Code

Putting text inside of ` ``` ` and ` ``` ` will mark the text as code.


## Commenting

I found this really cool [project allows commenting with github issues for commenting](https://utteranc.es/).
Some day I will install it, but for now I am good.
