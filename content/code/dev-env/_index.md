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
1. Before going to docker
     - All of this is before going to docker, by that I mean you can choose your version(s) and then grab
     the docker image you want to use
     - Keeping the editor close to the REPL or pkgs: Your editor will work better when given the tools
     it can find from an installed tool
     - Experimenting
     - Steps taken here result in docker layers later



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
| oh-my-zsh       | Has some good features for managing the ZSH prompt with prompts and plugins      |
| powerline fonts | Makes my terminals look nice with icons and unicode characters                   |
| pyenv           | Allows me to select python version without disturbing the installed one          |
| rvm             | Allows me to select a Ruby version without disturbing the installed one          |
| tfenv           | Allows me to select a Terraform version without disturbing the installed one     |
| tgenv           | Allows me to select a Terragrunt version without disturbing the installed one    |
| .editorconfig   | Align your team to the same settings of indenting/tabs-vs-spaces/etc...          |
