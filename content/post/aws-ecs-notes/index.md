---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Aws Ecs Notes"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-06-24T11:32:39-07:00
lastmod: 2021-06-24T11:32:39-07:00
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


## running a command

If you just want to get a docker container to run a command to evaluate its results, you can override its entrypoint
and pass in what ever you want. Here is my example:
