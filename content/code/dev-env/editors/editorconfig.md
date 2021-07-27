---
title: "Editorconfig"
linktitle: "Editorconfig"
date: 2021-07-24T22:48:40-07:00
type: book
summary: "Help sync up your team/contributors to a project with one file on some basic things like indent/tab-vs-spaces/encoding/line-endings."
---

Really like this project and how it has been adopted by so many editors automatically by default. Other
editors offer a plugin to be activated and this would be easy to configure as well. The [pattern is
very straight forward as well](https://editorconfig.org/#example-file).

## VSCode

This editor seems to load this file automatically on load. If you made a change in the `.editorconfig`
file you should close any files you have open and reopen them. Or just quit VSCode and restart the
project.

## Spacemacs

There is a command to apply the `.editorconfig` settings to a buffer called `editorconfig-format-buffer`.
After ran, it will update the buffer with the changes made to the `.editorconfig` file.

## Project templates

### Global

This is a good one to set for all files of your code:

```
# Set default charset
[*.{js,py,go,scala,rb,java,html,css,less,sass,md}]
charset = utf-8
```

### Django

### Python+Json

```editorconfig

```

### Go

```
# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

# Set default charset
[*.{js,py,go,scala,rb,java,html,css,less,sass,md}]
charset = utf-8

# Tab indentation (no size specified)
[*.go]
indent_style = tab

[*.md]
trim_trailing_whitespace = false

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```
