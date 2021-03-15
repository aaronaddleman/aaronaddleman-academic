---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Pipenv"
subtitle: "Notes and usage with Pipenv"
summary: "Maintaining packages for Python projects can be annoying. I use to use pyenv+virtualenv, but the I learned about Pipenv and have never looked back."
authors: []
tags: ['howto']
categories: []
date: 2021-03-14T22:05:39-07:00
lastmod: 2021-03-14T22:05:39-07:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

## What I Used To Do

After selecting my prefered Python version with `pyenv` I would install `pip install virtualenv` and then proceed with more steps to create the virutalenv, run the virtualenv, and install packages. This pattern was ok, but quite tedious as I summarize all of the commands below. Eventually, I would have to freeze the packages and build a lock file to select the versions of the packages which were compatible for the project I was working on.

1. pyenv local 5.8.6
1. pip install virtualenv
1. virtualenv .env
1. source .env/bin/activate
1. pip install -r requirements.txt

While this seems very straight forward, many things got better when moving to `pipenv`.

## What I Do Now

Now, I select my Python version with `pipenv` and then run `pipenv shell`. This is vastly much easier and allowes for better automation by using:

`pipenv run cmd-to-run`

If I want to add a package to the `Pipenv` file, I just install it with:

`pipenv install pkg-name`

## Installation

I have this already placed in [Libsh](/project/libsh) but I will also share the install instructions by the creator:

https://pypi.org/project/pipenv/

## Commands I Use

`pipenv shell`

This does all the work of creating the virtualenv into a temporary directory and launching a sub-shell of the project

`pipenv sync`

Installes all of the packages from the Pipfile.lock

`pipenv run`

Executes a command within the `pipenv` environment saving steps of sourcing other functions before executing.

`pipenv --python #.#`

Creates a new project with the `#.#` version of Python!

## Conclusions

I really have come to enjoy `pipenv` very much and its now my default tool for almost every Python project I work on. I really like
raw focused tools that help out multiple projects by solving specific issues. This is one of thoes tools.
