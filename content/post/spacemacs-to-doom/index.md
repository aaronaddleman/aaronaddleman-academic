---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Spacemacs to Doom"
subtitle: "Making the move from Spacemacs to Doom"
summary: "Why and How I moved from Spacemacs to Doom"
authors: []
tags: ['howto','ide']
categories: []
date: 2022-07-20T21:04:17-07:00
lastmod: 2022-07-20T21:04:17-07:00
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

## Why I moved

> tl;dr
>
> Frustrated with python virtual environments not loading like promised by a package.

The longer version and the rest of the reasons involved some small problems I kept facing over the years with Spacemacs and never really found a solution for no matter what I search for or how much code I threw at the problem. Its possible to widdle these reasons down to about two categories: speed and focus.

### speed

I found that Doom has an advantage of speed over Spacemacs in multiple areas. Most of the time it was just faster to load. Ya I am aware of the Emacs server to load really fast. But I dont really like this feature as killing the server is a pain when having to really quit. Actually, its more of a pain just to remember that the server is running in the background. As I said, this is not the top reason and its really a lazy reason, but its my reason.

### config

Doom has a better config management for packages, user config, and other things. Splitting it up to multiple files just seems much better and when enabling features, it seems to just know that it needs turn other packages off for it to work properly.

## How to move

After using Spacemacs for so many years, I had grown really custom to all of the shortcuts and was really comfortable with moving around. This made it really hard to move over to Doom, but enter in [chemacs2](https://github.com/plexus/chemacs2) which allows for setting profiles in Emacs. When I felt like using Doom, I could launch the profile for Doom and try out new things I read about and if something was too hard to find but I had to get progress made, I would just launch a new instance with Spacemacs to get the work done like I was used to doing.

### my chemacs2 setup

After following the installation instructions (which were pretty straight forward for the simple install) I finalized my config to be the following:

```elisp
(("default" . ((user-emacs-directory . "~/.emacs-installs/.emacs.default")))
 ("doom" . ((user-emacs-directory . "~/.emacs-installs/doom-emacs")
           ))
)
```

The above has `.emacs.default` being the installation of Spacemacs so that I could just launch emacs with no profile selection and get to work like I normally am used to doing. This would be the following command

```
emacs
```

And when I wanted to use Doom, I would use the following command:

```
emacs --with-profile doom
```

I also had to add the `~/.emacs-installs/doom-emacs/bin` path to my `$PATH` shell variable.

## Making the translation

### git (magit)

Spacemacs: `SPC g s`

Doom: `SPC g g`

The rest of magit is the same, so nothing really note worthy.

### frame navigation

Spacemacs: `SPC #`

Doom: `SPC w [h,j,k,l]`

### quick jumping

Spacemacs: `SPC j j [them type letters]`

Doom: `g s SPC [then type letters ]`
