---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Libsh Aws V2"
subtitle: "Adding Aws Cli V2 to Libsh"
summary: "Adding Aws Cli V2 to Libsh"
authors: []
tags: ["cli"]
categories: []
date: 2020-11-09T22:18:11-08:00
lastmod: 2020-11-09T22:18:11-08:00
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

I dont know what AWS was thinking when making V2 of the `aws` cli utility, but I have
to say, it was not that straight forward as V1. Some of the noteable changes are:

1. Have to install via package
2. Everything is paginated making scripting difficult/surprise

So, I had to augment the command and detect what version is currently installed.
Then build a command with a default option of no pagination as that was
getting really annoying.

Never the less, [PR 15](https://github.com/aaronaddleman/libsh/pull/15) adds the new changes
and I hope to add more AWS features in the future.