---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Mkdocs for Projects"
subtitle: "Documenting with multiple projects threaded together to support teams and their efforts."
summary: "How can we improve the documentation and searching for Engineers? Lets try MkDocs."
authors: []
tags: ["docs"]
categories: []
date: 2021-05-10T21:25:18-07:00
lastmod: 2021-05-10T21:25:18-07:00
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

After writting many types of documentation and experienced opinions from peers and management, I have started
down my path of experimenting with a static site generator which has the goal of making documentation. Through
out my career I have written many documents for helping my peers have a reference for what I have changed or observed to be set in place. I have also use multiple types of formatts: MoinMoin, Word, Confluence, SharePoint,
MarkDown files. These are all okay for their individual needs, but I have never been really satisfied with
any of them.

## The idea

Recently I have been using MkDocs as a POC for generating documenation. This has been receving lots of good
positive feedback for not only it having a good user interface, but the guidelines seem to also be accepted
as well.

## Observations

Currently, there are many projects that exist in git. Some of them have lots of docs in MarkDown while others
have less, and most have none. We are encouraged to use Confluence as much as possible to post information
for others to consume. But here are some observations:

1. Most of the Developers or Engineers do not like to edit on Confluence
1. Most Project Managers, meeting notes, or non-dev/eng love Confluence

This is very interesting to me. While I completly support and recognize the need for Confluence to empower
people to make simple notes and tables, I have to take notice of there being two groups of people and one
of them is unhappy.

## Unhappy

Editing in Confluence is horrible. Lets break this down into sub-topics.

### Versions

Yes, its great you can edit the same document with someone else. But there is a huge negative cost to this
when you look at trying to restore your previous version which ends up wiping out someone else's change.
If this were to happen in Software changes, we would have a really hard time making good progress.

### HTML

The source code of a page is beyond words of disgust. Using `{code}` and `<data>` everywhere makes for a
massive insult to doing any kind of decent coding of content. This makes it really difficult to have
confidence that what is being rendered is actually clean and not full of silly left over spaces that
have no style or are just blank. Left over things make for a very confused and frustrated editor.

### Editor

I recognize the toolbar of Confluence covers the basics. The issue is if you are not careful with placement
of text, you might be surprized by some change in formatting that just ends up getting deleted by accident
because the editor can not tell which way is up or down of the style its currently interpreting.

## MkDocs

Here are my reasons for using MkDocs:

1. Straight forward MarkDown files
1. Git controlled
1. Plugins in your control
