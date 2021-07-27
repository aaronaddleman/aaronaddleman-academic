---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Layers"
linktitle: "Layers"
summary: "Most features can be enabled with a Layer. While there are many, here are some that I think are a helpful based on types of projects."
date: 2021-05-10T09:15:34-07:00
lastmod: 2021-05-10T09:15:34-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  spacemacs:
    name: Layers
    parent: Spacemacs
    weight: 1
---

While there are many Layers on the main list of Spacemacs Layers, there are some that I have to have lots of return on your investment of time. I have tried
to break this information down into parts: 1) General 2) Projecs.

## General

### Git

I would say almost everyone who would consider using Spacemacs would probably agree that Git is a must. Therefore
adding the layers:

* git
* version-control

This enables the package called `Magit` (taking the work git and magic...is my guess..) which is just an amazing package that helps out with tons of Git based actions. Once you get down the basics of `push` `pull` `commit` `branch` you can pretty much stop there, or continue down the rabbit hole and see how deep you can harness the awesome power of `Magit`.

### Buffers

Emacs uses `Buffers` to refer to a piece of information that is open (file, process, etc...). Inside Spacemacs, you will be efficient in your time when being able to manage buffers. Enter `ibuffer` the layer that makes you the epic controller of all buffers. Here are some of my favorite features:

* selecting buffers that are not saved
* removing buffers that are selected
* grouping of buffers

Warning.. this layer is quite complex and I really need a cheatsheet for myself as I do not use this layer all too often.

## Projects

Getting ready for projects with Spacemacs can be easy and others can be a little more complex. But never
fear! The docs are here!... below... split up by components of your stack...

### Docker

### Python

### GoLang
