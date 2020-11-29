---
# Documentation: https://wowchemy.com/docs/managing-content/
title: "Prometheus on K8 Rpi"
subtitle: ""
summary: "How I run prometheus on K8 on Rpi"
authors: []
tags: ['k8', 'sbc']
categories: []
date: 2020-11-19T11:06:58-08:00
lastmod: 2020-11-07T10:00:08-08:00
featured: false
draft: true

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

While I was looking for an image to pair with this project, I found out Prometheus is the God of Fire. I guess in some way, fire is a basic part of our history as a species and is something that could be measured over time.

But... running Prometheus on the K8 was not the easiest. I cobbled many projects together and filled in my own touches to finish the job.

[rak8-metrics](https://github.com/aaronaddleman/rak8-metrics) holds all of the files I used for bringing up Prometheus on a K8 cluster running on the Raspberry Pi.
