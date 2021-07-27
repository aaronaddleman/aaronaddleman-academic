---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Tfenv"
linktitle: "Tfenv"
summary:
date: 2021-07-23T22:58:29-07:00
lastmod: 2021-07-23T22:58:29-07:00
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

Terraform allows to create many resources on multiple cloud providers. Very helpful if you do not appreciate the CloudFormation or other Cloud Provider
solutions to do automatic provisioning while storing state to plan changes for future updates. As terraform versions change, its nice to use [tfenv](https://github.com/tfutils/tfenv) to select and switch between multiple versions.

## Selecting the version

Creating the file in a project's root directory called `.terraform-version` will automatically help `tfenv` select the version your project
wants to use.
