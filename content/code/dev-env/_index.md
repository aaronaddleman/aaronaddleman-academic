---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Dev Env"
linktitle: "Dev Env"
summary: How I setup my development workstation so a can crank out some code with ideal workflow, less futzing, and more coding.
date: 2021-07-19T09:50:56-07:00
lastmod: 2021-07-19T09:50:56-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  dev:
    name: Dev Environment
    parent_id: dev
    weight: 1
---

## Summary

Sure, we all do it and everyone has their own reasons for what they use or its preety much a Docker container.
Am I right? Ok so apart from using Docker and fancy volume mounts, I like the tools to be as close as possible
to my editor so it can validate the package is loaded or linter and format my files or run some fn that a repl
can try out. If you are liking how that sounds then read on!

### Components

1. pyenv
1. git config per dir include
1. .editorconfig
1. mkdocs
1. github kanban (simple useage)
   1.	points
	 1. stories/issues
   1. projects
1. powerline fonts
1. brew
1. oh-my-zsh
   1. make shell like fish
1. libsh
   1. path management
1. docker
1. rvm
1. nvm
1. tfenv
1. tgenv
1. ctrl+x+e
1. spacemacs
   1. vterm
   1. unicode
   1. color-themes
   1. layers
      1. golang
      1. python
      1. linting
      1. pyenv selecting
