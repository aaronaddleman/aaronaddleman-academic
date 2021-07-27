---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Pipenv"
linktitle: "Pipenv"
summary: Using pipenv and its interesting gotchas
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

I have really grown to like the `Pipefile` and `Pipfile.lock` solution for managing Python packages. Also, it uses the `.python-version`
to pick the Python version you have installed with some light testing.

## Basic patterns

When ever I start a new project, I use the following commands to initialize a new project to install the version (only done once if a new
version), switch to global once, install `pipenv`, then nail down the version to the project to create the `.python-version` file and
use `pipenv` locally to manage the packages stamped in the `Pipfile` and `Pipfile.lock`.

```
# if a new version
# this is done once
pyenv install #.#.#
pyenv global #.#.#
pip install pipenv
# after install
pyenv local #.#.#
pipenv install package-name
pipenv install dev-tool --dev
```

## What I found

Over time I have gathered these possible solutions to fixing some issues with `Pipenv`.

### Stuck inside a virtualenv

* Problem

A virtualenv follows you around everywhere, but you are not in one.

* Possible Solutions

1. `unset VIRTUAL_ENV`

### Pipenv says you are using wrong version

* Problem

Pipenv says you are using the wrong version of Python.

* Possible Solutions

1. Nail down the Python version
     - I use `pyenv local #.#.#` that creates a `.python-version` file
     - `cd ..` then return with `cd -` to load the `.python-version` file
1. Kill the pipenv virtualenv
     - `pipenv --rm`
     - rebuild with `pipenv install`
