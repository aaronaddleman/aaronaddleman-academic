---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "iTerm, Hex Codes, and Tmux"
subtitle: "Get some power with iTerm sending hex codes for Tmux"
summary: ""
authors: []
tags: ['cli']
categories: []
date: 2021-03-12T23:17:37-08:00
lastmod: 2021-03-12T23:17:37-08:00
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
    - /articles/hexcodes-and-iterm/
---

## iTerm and hex codes

When using iTerm, being able to configure it for sending commands to Tmux to take full control of the multiplexing windows.
I find this super powerful as it gives me the power to have tabs and a persistant shell on a remote host. With some good configuration
you can have a weak computer (aka raspberry pi) remoting into a powerful computer and issue commands.

## Getting the hex codes

To get a hex code on a Linux based system, you can do the following:

```shell
xxd -psd
```

This will put your terminal into a capture state. Now the program is waiting for you type in the characters for capture and hitting return. Below is an example on how to find a key combination for Tmux to goto the previous window which is the key combination of `ctrl + b` then `p`

```
$ xxd -psg
^Bp
02700a
```

To end the capturing, use `ctrl + c`.

The resulting hex codes that have been returned are `02700a` and here is the breakdown on how to convert to hex codes:

| Text from xxd    | Converted to Hex | Keyboard buttons |
| ---------------- |:----------------:| ----------------:|
| 02               | 0x02             | `ctrl + b`       |
| 70               | 0x70             | `p`              |
| 0a               | 0x0a             | `Return`         |

`02` or `0x02` = `ctrl + b`

`70` or `0x70` = `p`

`0a` or `0x0a` = `Return`

Putting this all together (or partially together) in iTerm, you can create a custom key binding in iTerm to have a keyboard combination to switch between windows by sending a hex code of:

`0x02 0x70`
