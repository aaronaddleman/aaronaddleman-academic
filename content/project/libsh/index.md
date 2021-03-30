---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Libsh"
subtitle: "Manage your shell environment so you can get on with coding."
summary: "After you configure your shell environment, you will end up doing it again. End the loop and set it once."
authors: []
tags: ['cli']
categories: []
date: 2020-10-09T04:20:49-07:00
lastmod: 2020-10-09T04:20:49-07:00
featured: true
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.

image:
  caption: Photo by rawpixel on Unsplash
  focal_point: Smart

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

## Github

Code lives in [libsh's github home](https://github.com/aaronaddleman/libsh) and more documentation is updated on a change basis.

## Installation

Super simple process to install LIBSH:

```shell
export LIBSH_PARENT_DIR=$HOME/src/github.com
mkdir -p $LIBSH_PARENT_DIR
git clone https://github.com/aaronaddleman/libsh $LIBSH_PARENT_DIR/libsh
echo "source $LIBSH_PARENT_DIR/libsh/libsh.sh 'fn'" >> $HOME/.zshrc
echo "source $LIBSH_PARENT_DIR/libsh/libsh.sh 'env'" >> $HOME/.zshenv
cp $LIBSH_PARENT_DIR/libsh/.libsh_example $HOME/.libshrc
echo "Make a new shell to try it out!"
```

## History

Over the years of working with Linux, I have found myself always trying to recall how to install something, or do an action, or setting just the correct environment variables in a certain file. Another reason is that most installation steps are not correct when it comes to loading lines in `.zshrc` and `.zshenv`. After a while, I got tired and decided to start collecting small functions to this for me. ZSH also helped in allowing to use the TAB button for doing auto-complete of functions and variables.

## Benifets

### Sorting of features

All commands are sorted by their common prefix. This allows for the project to have their own buckets of commands and keep some basic sort of grouping.

### Documenting

Each command also serves as a documenation on how to use the service. Take using the aws command. For any one of them you may type in the command `type -f aws_blah` and you will be able to see what that function is doing or by using `the_command --help` for most commands I have documented.

### Refreshing

There is a feature for checking the last known git clone date. This allows for detecting the desired max amount of drift before asking the customer if they want to refresh the git repo.

### Validation

I have been using the pattern of a `pre` command where needed to validate the dependencies of the command. One example of this is with Vault where the function of `vault_pre` will try to test the connection to the `VAULT_ADDR`.

### Personal vs Professional

Libsh will load all files in `$HOME/.sh.d/*.fn.sh` and `$HOME/.sh.d/*.env.sh` which allows for customizing your own functions that you require for either personal or professional environments.
