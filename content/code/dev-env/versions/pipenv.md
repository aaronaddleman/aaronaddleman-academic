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

## What I found

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
