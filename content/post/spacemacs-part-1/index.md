---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Spacemacs Part 1"
subtitle: "Part 1 of using Spacemacs"
summary: "Using the Spacemacs Editor and my notes of what features I use"
authors: []
tags: ['howto']
categories: []
date: 2021-03-13T00:04:22-08:00
lastmod: 2021-03-13T00:04:22-08:00
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
aliases:
  - /howtos/spacemacs/
---

WARNING: This document is only for EVIL based users. Not control tower.

## Navigation of files

### Using neotree

This is awesome way to have a visual tree of your directory structure.

To open neotree:

```
SPC f t
```

To move back to neotree:

```
SPC 0
```
## Text manipulation

### iedit (multi cursor editing)

1. Select a pattern of text `v` or `SHIFT v`
1. Enable iEdit `SPC s e`
1. The following shortcuts are now available:
   - press F to limit the scope to the current function
   - press L to limit the scope to the current line
   - press J to increase the scope (starting from the current line) one line below
   - press K to increase the scope one line above
   - navigate between the occurrences with n and N and press TAB to remove an occurrence.
1. Where ever you are, just start editing!

## Text selection

### Highlight to a specific character

Highlight to a specific character, in this case a `#`:

```
v h t #
```

### Listing functions in a buffer

To list all the functions in a buffer and jump to one: spacemacs/helm-jump-in-buffer

```
SPC s j
```

## Text manipulation

### Replacing \n

To replace a bunch of `\n` with actual newlines

* Yank a newline into the clipboard
* Issue a `:`
* Use string subtitution: `%s/\\n/`
* After the last slash in previous step, paste the clipboard of the newline
* Complete your options for replacing the \n: `/g`

### Best way to scale the font up on a Mac

When showing your code on the big screen or to someone near your screen and they say "the text is too small", here is the best way to scale the font up:

1. Choose the change font for mac applications
1. Change the size of the font

## Development

### Clojurescript

To improve on Cojurescript development within Spacemacs, you need to have the following layer installed:

```
clojure
html
javascript
```
