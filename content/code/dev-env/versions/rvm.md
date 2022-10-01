---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Rvm"
linktitle: "Rvm"
summary:
date: 2021-07-23T22:58:16-07:00
lastmod: 2021-07-23T22:58:16-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
---

## Why

[Rvm](https://rvm.io/) is a Ruby Version Manager allowing to select and manage multiple versions of Ruby by installing them to your home directory.
Over time I have used this tool with many projects with good success.

On the macOS I have found its best to have *Brew* installed as well so that it has the tools needed to intall support libraries.


## Selecting versions and gemsets

While Python has the idea of `pipenv` and `virtualenv`, when using `rvm` you have gemsets. These are just like Python's `virtualenvs` but also a little
differnt. There is great documentation on the https://rvm.io website about how todo this, but here are my most popular commands I use to get some
Ruby projects done:

```
# if first time intalling
rvm install #.#.#
rmv use #.#.#
# pick a project
# name for working on
rvm gemset create the-project-name
rvm gemset use the-project-name
# now you can install packages
# and not worry about conflict
gem install package-you-want
```
