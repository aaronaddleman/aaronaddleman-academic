---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Vscode, 2nd chance"
subtitle: "I gave VSCode another chance, and its better than I thought."
summary: "How I gave VSCode another go and I have not looked back."
authors: []
tags: ['howto']
categories: []
date: 2020-11-09T22:12:32-08:00
lastmod: 2020-11-09T22:12:32-08:00
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

## extensions

I have taken to using the VSpaceCode extention with about 80% success.
There are times when VSpaceCode gets in the way, but for the most part
s been worth it to have quick menu actions at the ready.

## what i like

When making a project, there is a .vscode directory with very clear
settings to help another person rebuild a similar development environment
by defining a file like this:

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
  // Extension identifier format: ${publisher}.${name}. Example: vscode.csharp

  // List of extensions which should be recommended for users of this workspace.
  "recommendations": [
  ],
  // List of extensions recommended by VS Code that should not be recommended for users of this workspace.
  "unwantedRecommendations": [
  ]
}
```

This is great because now we have a way to track the development environment per project.
Each project has its own requirements, thus each one should have its own recommendations
and now can be referenced in a document about the project instead of just reading. Now
its all in one place.

## commands i use

### converting indentation

```vscode
Convert Indentation to Spaces
Convert Indentation to Tabs
```

When writing this article, I added some code above, but the indentation
was using tabs instead of spaces. Perhaps after reading this you
have a different opinion of me, but lets put that aside for now. I
will respect what you decide. The nice thing about this command
of `Convert Indentation to Spaces` or `Convert Indentation to Tabs` is
just what it says. Your document's indentation will be converted as you
desire. Done.

### integrated terminal

```vscode
create integrated terminal in workspace
```

Working with a terminal right next to your code is valuable to my workflow.
Running the command `create integrated terminal in workspace` will try to
load the environment settings you require for the project. This is great
as almost all developers repeat this pattern. Now you can use one command.
It would be great to have a set of commands you would like to execute when
running based on an environment variable.
