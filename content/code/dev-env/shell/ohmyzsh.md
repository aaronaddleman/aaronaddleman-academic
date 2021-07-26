---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Oh-my-zsh"
linktitle: "Oh-my-zsh"
summary: "Framework for organizing the ZSH prompt"
date: 2021-07-23T22:58:08-07:00
lastmod: 2021-07-23T22:58:08-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
---


[ohmyzsh.sh](https://ohmyz.sh/) is a great framework for managing your ZSH environment. Sometimes I have found the prompt can get really slow if
you use many plugins, but I only use 3 of them and a prompt theme.

Follow their instructions or use [libsh](https://github.com/aaronaddleman/libsh) that I wrote to do the simple install.

## Plugins I use

There are really only 2 plugins I use and here are the names and why:

```
plugins=(zsh-autosuggestions history-substring-search zsh-syntax-highlighting)
```

1. super fast to find recent commands
1. immediate feedback if the command exists or not based on color
1. current git branch
1. current state of git changes needed
1. if last command took more than 10 seconds, time to execute is displayed
1. [SpaceShip-Prompt](https://github.com/spaceship-prompt/spaceship-prompt) shows the following info
    1. Version of Python/Go/Nvm/Ruby/Docker
    1. Battery level being low
    1. Virtualenv loaded

## SpaceShip-Prompt

Site: https://github.com/spaceship-prompt/spaceship-prompt

```
# note: depending on your browser font
# you might not see the icon between the
# word "on" and "master" showing the git
# branch icon
libsh on  master [$!?] on 🐳 v20.10.6
➜
```

To see the icons, you should use a font that includes the `powerline` extended glyphs.
