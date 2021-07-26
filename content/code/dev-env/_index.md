---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Dev Env"
linktitle: "Dev Env"
summary: How I setup my development workstation so a can crank out some code with ideal workflow, less futzing, and more coding.
date: 2021-07-19T09:50:56-07:00
lastmod: 2021-07-19T09:50:56-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
---

Sure, we all do it and everyone has their own reasons for what they use or its a Docker container. Am I right? Okay so apart from using Docker and fancy volume mounts, I like the tools to be as close as possible to my editor so it can validate the package is loaded or linter and format my files or run some FN that a REPL can try out. If you are liking how that sounds then read on!


## Why I did this

Building a working deveopment environment is unique to many people and teams. There are many situations
that make this process go in different directions, but at its core, there are some ideas that make
for an improved position to allow for nimble growth and additions:

1. Try to not use global as much as possible
     - This means use as many utilities installed to your locally home/project directory
     instead of the global environment (excluding containers)
     - Less `root` based access rights needed for modifying settings
     - Multiple versions allowed to be installed
1. Keep your `$PATH` clean
     - Less work for your shell to scan of directories of executables available
     - Clear understanding of what is taking presedence
     - Adding/Removing what is needed is very clear of wher its happening


## What I use

| Name            | Why                                                                              |
| :--             | :--                                                                              |
| Spacemacs       | My current editor of choice                                                      |
| brew            | Not a big fan, but used after I have found other ways to install things on a Mac |
| ctrl + x + e    | Edits a command line with my selected editor                                     |
| docker          | Containers and experimentation                                                   |
| git config      | Set git per main directory for personal and professional projects                |
| libsh           | My own tools that I have found useful for improving the shell experience         |
| mkdocs          | Allows for easy documenting of projects using MarkDown                           |
| nvm             | Allows me to select a Node version without disturbing the installed one          |
| oh-my-zsh       | Has some good features for managing the ZSH prompt with prompts and plugins      |
| powerline fonts | Makes my terminals look nice with icons and unicode characters                   |
| pyenv           | Allows me to select python version without disturbing the installed one          |
| rvm             | Allows me to select a Ruby version without disturbing the installed one          |
| tfenv           | Allows me to select a Terraform version without disturbing the installed one     |
| tgenv           | Allows me to select a Terragrunt version without disturbing the installed one    |
| .editorconfig   | Align your team to the same settings of indenting/tabs-vs-spaces/etc...          |

### pyenv

Why do I use this? Great question. `PyEnv` allows you to install and select versions of Python per project
or globally. The first benefit of this feature is to not use the system version of Python for installing
packages. The next benefit is pinning a project down to a specific version of Python by using the file
called `.python-version`, but lets start listting these features into their own sections.

Each time you return back to this project `PyEnv` will re-select the version
that is defined inside the file named `.python-version`. You can also stamp this file with

things

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
