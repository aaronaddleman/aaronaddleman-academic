---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Editorconfig"
subtitle: "Rules for saving files that are defined in a file to be shared across most editors"
summary: "When working on a project, its helpful to align on some basic preferences of file formatting, line endings, tabs, trailing whitespace, and other things. Editor config enables a project to define these properties when you save a file."
authors: []
tags: []
categories: []
date: 2021-03-04T20:07:11-08:00
lastmod: 2021-03-04T20:07:11-08:00
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

## summary

Working on projects with multiple developers come with it multiple editors... most of the time. Almost always
you will end up with a commit that changes a ton of whitespace, newlines, or tabstops. This is because the previous
 commit is using different settings. While most projects might never run into this, its quite possible some day it
 will happen.

Editorconfig tries to define these settings in a file and most modern [editors have adopted the plugin to be pre-installed as a standard](https://editorconfig.org/#pre-installed).

## how it works

After making a file `.editorconfig` in a directory (most common place is the top level of a project) those settings are loaded. Upon saving a file, the rules are automatically applied.
This makes for trying to align the settings of modern editors and keep the commits down to only the code changes, instead of formatting changes.

## common file

```
# editorconfig.org

# is this the root?
root = true

# setting for all files
[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

# all .toml files
[*.toml]
max_line_length = 100

# all .md files
[*.md]
trim_trailing_whitespace = true

# specific directory of *.html files
[layouts/shortcodes/*.html]
insert_final_newline = false
```

## reference

Here is a [wiki page of all the EditorConfig-Properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties) for reference.
