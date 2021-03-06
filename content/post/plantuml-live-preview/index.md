---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Plantuml Live Preview"
subtitle: "Make diagrams with code and live preview in VSCode"
summary: "Diagrams with code with live preview in VSCode with steps on how to setup the environment."
authors: []
tags: ["graphs"]
categories: []
date: 2020-10-20T10:50:53-07:00
lastmod: 2020-10-20T10:50:53-07:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  placement: 3
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: ["plantuml"]
---

Creating graphs and flow charts or sequence diagrams can go a long way, but making them can be a pain. Instance feedback allows us to lower the resistance of making more diagrams. I offten visit [plantuml.com](plantuml.com) for suggestions and put up with the ads surrounding the examples.

But instead, I have decided to make my own library of examples and along the way share with you the setup I use with VSCode for makiing a live preview which makes for editing graphs much easier.

## Install extension

To enable VSCode to do a live preview of your PlantUML graph I have been using the extension **Markdown Preview Enhanced**.

Once installed, you can open a Markdown file, and fill with code like the example below, the run use the command pallet **Markdown: Markdown Preview Enhanced: Open preview to the side** and you will have a new tab showing your finished work.

```plantuml
@startuml
start

if (Plantuml installed?) then (yes)
  :process all\ndiagrams;
else (no)
  :process only
  __sequence__ and __activity__ diagrams;
endif

stop
@enduml
```
