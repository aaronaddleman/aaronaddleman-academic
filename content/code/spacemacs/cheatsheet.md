---
title: "CheatSheet"
linktitle: "CheatSheet"
summary: "Quick facts about how to do tasks in Spacemacs"
date: 2021-11-17T09:15:34-07:00
draft: false  # Is this a draft? true/false
type: book  # Do not modify.
---

## Editing

### CodeBlock

When you have a code block in a `org-mode` file, that looks like the one below, you can use `C-c '` to edit the contents of the code block in a separate buffer. This makings for alignment and language rules much easier to handle.

To get back to the previous buffer area, there are two possible commands that you could use which are based on where you came from.
If you are in org-mode file, use the instructions at the top of the buffer.

If you are in a markdown (or other file that supports embedded syntax language), then use `C-c '`

## Frames and Windows

The thing about frames is that its not what we are all used to calling things. Usually we think of a window as a box of stuff and we have multiple windows. Yes that is also true in Emacs, but then what is a Frame?

Well, a Frame is a thing that holds the windows. Wait, what do you mean? I thought that the OS is the thing that is the Frame that is holding the windows. Yes that is true about almost every ever app out there, but in Emacs, a Frame is the "actual" window for the OS that you are using to run Emacs, but Emacs calls it a Frame. Inside the Frame are multiple Windows of buffers.

Why is this all important? Because you can flip between Windows and Frames super fast and it can also be organized and layouts saved to files between restarts.

### Windows

Managing windows is quite fun and most of the time I only use these commands:

1. Selecting window by #
1. Vertical split
1. Horizontal split
1. Resize
1. Layouts

If I want more options, I usually default to the "windows transient" mode where I have access and cheat sheets to more commands.

#### Selecting windows

This is by far the most popular command I use by invoking `SPC #` where the `#` is a single number ranging from `0` to `9`.
### Windows Transient

This mode is fantastic. Using `SPC w .` brings up a large list of commands that are available at your finger tips and broken up to categories. These are:  select, move, split resize, other. Most of the time I use this mode for resizing a window by using `{` and `}`.

### Frames
