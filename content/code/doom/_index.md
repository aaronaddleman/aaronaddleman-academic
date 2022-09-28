---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Doom, the editor that I love"
linktitle: "Doom"
date: 2022-09-13T21:47:09-07:00
type: book
summary: "Notes and findings about the Emacs pacakge manager called Doom."
---

## Workspaces

Wow this just works so well. `SPC TAB` is the root menu for this great feature. From there you have a tons of options but really I have only used the following:

1. `SPC TAB BackTick` - Flips between last workspace
1. `SPC TAB TAB` - Shows the workspace bar for quick selection by number
1. `SPC TAB .` - Switches to workspace by typing a name or letters matching the name

## Python and testing

I have found that you need the following combination of settings to make sure that this all works:

Open your `.doom.d/init.el` file and add this:

```lisp
(doom! )
       (python
        +lsp
        +poetry
        +pyenv)
)

```

### Preparing a python version

First, select the version you want to use and get it installed:

```
pyenv install 3.9.14
```

Then you need to install the following packages to on a global scale to get it prepared:

```
pyenv global 3.9.14
pip install python-lsp-server
pip install flake8
pip install poetry
pip install pylint
```

### Making a Python project

```
mkdir project_name
pyenv local 3.9.14
poetry init
# answer questions
# and then start coding!
# make sure to add pytest of at least version 1.2.0
```

### Running things with poetry

Basic running of your code inside poetry is done with:

```
poetry shell
```

or

```
poetry run the_command --with-args
```

## Projects

### Add a project in Doom

```
SPC p a
```

then find the folder you want to add. Best that it be a git directory!

### Closing a project

Reasons for closing a project are to re-evaluate the settings picked up by major or minor modes:

```
SPC p k
```

This will kill all the buffers under the project and hope you have everything saved.
