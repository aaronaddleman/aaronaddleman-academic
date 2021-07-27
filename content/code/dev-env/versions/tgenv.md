---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Tgenv"
linktitle: "Tgenv"
summary:
date: 2021-07-23T22:58:37-07:00
lastmod: 2021-07-23T22:58:37-07:00
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

Terragrunt is a wrapper for Terraform. I do not use it often, but its there when you need it. Each project will have its own
version of Terragrunt and its why I am thankful to the project [tgenv](https://github.com/cunymatthieu/tgenv) which allows to
install and switch between multiple versions of Terragrunt.

## Selecting by project

Creating a file called `.terragrunt-env` in your root directory of your project will automatically select the version you need
for the project. This makes it really easy for teams to get the tool they need with what ever methods they accept.
