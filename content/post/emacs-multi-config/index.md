---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Emacs Multi Config"
subtitle: "Splitting up work by a profile"
summary: "Running Emacs with a single config is limiting. For some this is straigt forward, but for me, I wanted to try multiple Emacs. So these are my notes about Chemacs2."
authors: []
tags: []
categories: []
date: 2022-02-07T08:31:39-08:00
lastmod: 2022-02-07T08:31:39-08:00
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

## Summary

By far the best experience to experimenting with multiple configs of Emacs is Chemacs 2. The project is located at https://github.com/plexus/chemacs2 and has a wonderful write up on [how to use it](https://github.com/plexus/chemacs2#installation "How to use Chemacs 2").

## The sell

The short summary is that, once configured, you can run emacs with a default profile or use the following

```shell
emacs --with-profile my-profile
```

and you launch emacs with the profile of your choice! This was great for me trying out the Doom package manager when my main goto was using Spacemacs. If you happen to be in the same boat as me and are using Spacemacs [there is a whole section dedicated for Spacemacs users in the documentation](https://github.com/plexus/chemacs2#spacemacs "Whole section for Spacemacs users to for configuring Chemacs 2"). And a whole other section [section dedicated just for Doom users](https://github.com/plexus/chemacs2#doom-emacs "Another section of configuration of Chemacs 2 for Doom users").

## How I use it

I know its plain simple, but here is my `~/.emacs-profile.el` contents.

```elisp
(("default" . ((user-emacs-directory . "~/.emacs-installs/.emacs.default")))
 ("doom" . ((user-emacs-directory . "~/.emacs-installs/doom-emacs")
           ))
)
```

## Future

Once I got the hang of using Doom over Spacemacs, I sort of stopped using Chemacs 2, but will probably use it the future if I have to install a new version of Doom or experiment. I think this also lends to testing packages for Emacs as well as switching settings for personal vs focused work (professional projects, etc...).
