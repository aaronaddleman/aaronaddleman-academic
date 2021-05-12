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
out my career I have written many documents for helping my peers have a reference for what I have changed or observed to be set in place.
I have also use multiple types of formatts: MoinMoin, Word, Confluence, SharePoint,
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

The other observation(s) (that has grown over the years) goes like this:

> * You read more code than you write.
> * You read logs more than you read code.
> * You read timestamps more than you read logs.
> * You read docs more than you read logs or timestamps.

After you have created code, I could probably assert that the amount of times
you have re-read code is way more beyond the amount of times you write code.
In order to make good/improved choices on making changes, you _should_ be
reading well structured logs in order to know where your change should be
placed. Along with well structured logs, I could assert that you look at
the timestamp of the logs very often, if not even more than you read logs.
At this point you _should_ be looking at documentation for information
on what you can expect for the state of the application.

What does this all really mean? What does it matter?

To me, this is one way to measure a well described application where
making a change is really easy if we just reverse the order from above:

> * Read the documenation
> * Read the timestamped logs for where you want to make a change
> * Read the code that is associated with the logs
> * Write the code you want to change

This process usually is trimmed down during normal work hours and
causes for time lost on a daily (perhaps hourly) basis.

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
1. MarkDown is easy
1. Still renders in GitHub
1. Support for diagrams with text
1. Localized search to project(s)
1. Extendable with Python

## Version 0

There are two problems that I want to solve:

1. Improve searching for content
1. Git based PRs include documenation updates

Engineers and Support teams use search
I came across the project [mkdocs-monorepo](https://github.com/backstage/mkdocs-monorepo-plugin)
which allows the inclusing of other `mkdocs.yml` files. Actually, I think the only content
that is being inluded is the `Name` and the `nav` of the YML file. But this is the plugin
that is making my first version possible. By grouping projects around a team, you have the
content localized for searching.
