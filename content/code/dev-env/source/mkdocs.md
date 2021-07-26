---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Mkdocs"
linktitle: "Mkdocs"
summary:
date: 2021-07-23T22:57:43-07:00
lastmod: 2021-07-23T22:57:43-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
---

If you are okay with MarkDown, writing software, and documentation, then I highly suggest using MkDocs. This Python based project starts
with a `mkdocs.yml` file to describe the project, navigation, options, theme, and plugins. Its very straight forward and easy to use. I
have [an article about how I think its better than wiki for engineers](/post/mkdocs-for-projects/).

Getting started with MkDocs is pretty easy, but I have come up with a method that might make things even easier. The following project
streamline this with a container defined in a `Dockerfile`.

## Easy-MkDocs

I created a simple [project called `Easy-MkDocs`](https://easy-mkdocs.addleman.dev) to help in running `mkdocs` a little easier with containers.

Please use if you find it helpful.
