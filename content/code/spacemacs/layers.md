---
title: "Layers"
linktitle: "Layers"
summary: "Most features can be enabled with a Layer. While there are many, here are some that I think are a helpful based on types of projects."
date: 2021-05-10T09:15:34-07:00
draft: false  # Is this a draft? true/false
type: book  # Do not modify.
---

While there are many Layers on the main list of Spacemacs Layers, there are some that I have to have lots of return on your investment of time. I have tried
to break this information down into parts: 1) General 2) Projecs.

## General

### Git

I would say almost everyone who would consider using Spacemacs would probably agree that Git is a must. Therefore
adding the layers:

* git
* version-control

This enables the package called `Magit` (taking the work git and magic...is my guess..) which is just an amazing package that helps out with tons of Git based actions. Once you get down the basics of `push` `pull` `commit` `branch` you can pretty much stop there, or continue down the rabbit hole and see how deep you can harness the awesome power of `Magit`.

### Buffers

Emacs uses `Buffers` to refer to a piece of information that is open (file, process, etc...). Inside Spacemacs, you will be efficient in your time when being able to manage buffers. Enter `ibuffer` the layer that makes you the epic controller of all buffers. Here are some of my favorite features:

* selecting buffers that are not saved
* removing buffers that are selected
* grouping of buffers

Warning.. this layer is quite complex and I really need a cheatsheet for myself as I do not use this layer all too often.

## Projects

Getting ready for projects with Spacemacs can be easy and others can be a little more complex. But never
fear! The docs are here!... below... split up by components of your stack...

### Python

* pyenv
* pylint

### GoLang

Getting the most out of Spacemacs for writing GoLang starts with the layers instructions:

https://develop.spacemacs.org/layers/+lang/go/README.html

```bash
go_install_for_spacemacs() {
    if [ "$(command -v go 2>/dev/null)" ]; then
        go get -u -v github.com/mdempsky/gocode
        go get -u -v github.com/rogpeppe/godef
        go get -u -v golang.org/x/tools/cmd/guru
        go get -u -v golang.org/x/tools/cmd/gorename
        go get -u -v golang.org/x/tools/cmd/goimports
        go get -u -v golang.org/x/tools/cmd/godoc
        go get -u -v github.com/zmb3/gogetdoc
        go get -u -v github.com/cweill/gotests/...
        go get -u github.com/haya14busa/gopkgs/cmd/gopkgs
        go get -u -v github.com/davidrjenni/reftools/cmd/fillstruct
        go get -u github.com/josharian/impl
    fi
}

[ -d $HOME/go ] && export GOPATH="$HOME/go" || __debug "could not find $HOME/go"
[ -d $GOPATH ] && export PATH=$PATH:$GOPATH/bin
[ -d /usr/lib/go ] && export GOROOT="/usr/lib/go" || __debug "unable to find /usr/lib/go"
[ -d /usr/local/go ] && export GOROOT="/usr/local/go" || __debug "unable to find /usr/local/go"
```
