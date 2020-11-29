---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Signing Git Commits With Gpg"
subtitle: ""
summary: ""
authors: []
tags: ['howto']
categories: []
date: 2018-01-15T09:04:11-08:00
lastmod: 2018-01-15T09:04:11-08:00
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

Make your code changes with a gpg signature to let everyone know the change is from a digital key of your generating. This gets us all closer to the verified change of code by individuals and helps build confidence in submitting data.

## the setup

If your on a Mac like I am, I had to do the following:

1. acquire a gpg private and public key
1. install stuff
   - `brew install gnupg2 pinentry-mac`
1. tell brew to overwrite gnupg
   - `brew link --overwrite gnupg`
  
create a file of /usr/local/bin/pinentry-mac with the contents:

```bash
$ cat /usr/local/bin/pinentry-mac
#!/bin/bash
exec "/usr/local/Cellar/pinentry-mac/0.9.4/pinentry-mac.app/Contents/MacOS/pinentry-mac" "$@"
```

get the key id you want to use:

```bash
gpg --keyid-format LONG --list-keys
```

tell git which key to encrypt with

```bash
git config user.signingkey KEYID-FROM-CMD-ABOVE
```

tell gpg-agent to use pinentry-mac

```bash
$ cat ~/.gnupg/gpg-agent.conf

default-cache-ttl 600
max-cache-ttl 7200
pinentry-program /usr/local/bin/pinentry-mac
```

tell git config to use the gpg2 program

```bash
git config gpg.program gpg2
```

tell git config to use a credential healper

```bash
git config --global credential.helper osxkeychain
```

enable git gpg signing

```bash
git config commit.gpgsign true
```
