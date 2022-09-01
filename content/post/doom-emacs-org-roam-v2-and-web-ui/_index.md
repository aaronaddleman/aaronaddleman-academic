---
title: "Doom Emacs Org Roam V2 and Web Ui"
date: 2022-08-31T12:15:57-07:00
draft: true
---

## Introduction

Over the years I have started to really fall back to using Org Roam for all my reference material capturing system. Its easy to look things up and linking topics together just really click with me. In the past I used Emacs with Spacemacs management and got to use the Org Roam system there, but then I moved to Emacs and Doom. Found a new appreciation for the system but did not find it easy to configure. Here are my notes, configuration, and how I implemented Org Roam v2 into Emacs Doom.

## Things I like

Out-of-the-box I got the following:

1. Tags show up during search
1. Searching of notes from another project (this might be just me)

## Instructions

* Update `init.el` with the following:

```lisp
       (org               ; organize your plain life in plain text
        +dragndrop
        +hugo
        +jupyter
        +present
        +pretty
        +journal
        +roam2)
```

This is what I use for my config, but really all you need to get org roam v2 working is the `+roam2` option added.

* Update `config.el` with the following:

```lisp
;; set your location of notes
;; make sure also to make a directory of ./roam
(setq org-directory "~/src/github.com/org-roam-notes/")
;; From https://github.com/org-roam/org-roam-ui#doom
(use-package! websocket
  :after org-roam
  :config (setq org-roam-ui-sync-theme t
                org-roam-ui-follow t
                org-roam-ui-update-on-save t
                org-roam-ui-open-on-start t))
```

* Update `packages.el` with the following:

```lisp
(unpin! org-roam)
(package! org-roam-ui)
```

This allows Doom to subscribe to the latest version of org-roam and include some great features. Most of the time Doom has a pinned version. This is the place where things could possibly go wrong if something is not compatible, but I have not had an issue so far for a while.

Now you just need to run a `doom sync` and re-launch.

## Quick Intro to capturing

Now lets get on with the capturing of information! Searching by far will usually be the most popular one but you don't have anything to search if you are starting with a new repository. So, lets get into capturing and then we can move on to searching.

To capture a new node start with `SPC n r n` for running the command `org-roam-capture`. A new buffer should come up with the following:

```markdown
:PROPERTIES:
:ID:       0c713e22-2517-4a0f-aedb-175c1eb016a0
:END:
#+title: New Node

```

You have also have the following options at the top of this buffer that allow you to `Finish`, `Refile`, or `Abort`.

- Finish allows you complete the newly created node. This is a one time option that comes up only for new nodes. When you edit a node, this option does not show up.
- Refile will relocate a file from an entry based template.
- Abort cancels the capture and does not create the file. You will get prompted to provide a yes or no as your final answer to execute this action.

Now you can write your note!
