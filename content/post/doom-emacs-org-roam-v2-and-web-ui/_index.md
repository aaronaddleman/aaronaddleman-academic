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

This allows Doom to subscribe to the latest version of org-roam and include some great features. Most of the time Doom has a pinned version. This is the place where things could possibly go wrong if somethign is not compatible, but I have not had an issue so far for a while.

Now you just need to run a `doom sync` and relaunch.
