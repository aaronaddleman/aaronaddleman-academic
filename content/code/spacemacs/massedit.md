---
title: "Mass Edit"
linktitle: "Mass Edit"
summary: "Changing a pattern of things sometimes is really important. Spacemacs makes use of some packages that make this task really nice."
date: 2021-08-24T17:59:48-07:00
draft: true  # Is this a draft? true/false
type: book  # Do not modify.
---

## Recursive Search+Replace

1. `M-x find-name-dired RET`
1. Select the directory as your beginning point for recursive searching
1. Enter in pattern for filenames to find
1. Press `t` to toggle the files for updating
1. Press `Q` for `Query-Replace in Files...`
1. Enter in the text to search for
1. Enter in the text to be used for replacing the text found
1. Press buttons to accept replacement
     - `y` = yes replace it and move to next match
     - `Y` = yes to replacing all matches and no prompting
     - `n` = skipp and move to next match
     - `!` = replace all matches
     - `N` = skip remaining matches
1. Activate `iBuffer` with `C-x C-b`
1. Mark all unsaved buffers with `* u`
1. Use `S` to save all of them
1. Close all buffers affected with:
     - `* * RET` to unmark all
     - `D` to close marked
