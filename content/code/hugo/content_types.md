---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Content_types"
linktitle: "Content_types"
summary:
date: 2020-12-15T09:15:11-08:00
lastmod: 2020-12-15T09:15:11-08:00
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
    name: content types
    # parent: YourParentID
    weight: 2
---

## hugo and academic content types

1. post
3. project
4. talk
5. publication
6. docs
7. widget_page

## when to use them

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

### project

Summarizing a project is great for gathering multiple posts under one goal. By summarizing the project
you can associate posts to be listed under the "related" section of the project and post.

```shell
hugo new --kind project project/name-of-project
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
| menu:topLevel:weight | controls the sidebar position of the item                  |


### the rest...

I have yet to use the other types of content. Perhaps as I grow, I will come back to this
section and provide an update.
