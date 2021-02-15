---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Libsh Npm Resolved; and a reload"
subtitle: "Npm issue resolved"
summary: "Npm issue resolved"
authors: []
tags: ["cli"]
categories: []
date: 2021-02-15T09:21:25-08:00
lastmod: 2021-02-15T09:21:25-08:00
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
projects: ["libsh"]
---

In my haste to fix this issue, I neglected to make a PR, but really, when its just one person working on a project... does it really matter? Maybe to some so I will try to improve, but NPM was not loading properly. I noticed this when trying to do [CDKTF](/post/cdktf-trials) tutorial where the bin install was not being recognized. And with that, this change was commited:

https://github.com/aaronaddleman/libsh/commit/14ec639eee67bf4150472ca35207eaf73406f6b9

Notice this change also brings in adding `/usr/local/bin` to your path. This seems very neccessary as this path is super popular.

But why would you want to use LIBSH for adding this path? Glad you asked. The function of `libsh__add_path` will check if the path exists or not in the variable of `$PATH`. If the path does not exist, then the path will be inserted at the beginning or the end of the `$PATH` variable based on the argument paseed.

This function can also be used by you other functions in `$HOME/.sh.d/` making your work environment a little bit more clean.

Also included in this commit is a `libsh__reload`. I have tried this function out and it does an ok job at reloading configuration changes, but does have a couple of shortcomings and is not ideal for testing changes to LIBSH functions. Use at your own need.
