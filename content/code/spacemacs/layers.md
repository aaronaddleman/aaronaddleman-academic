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

[The Spacemacs GoLang layer](https://develop.spacemacs.org/layers/+lang/go/README.html) has some
really good information, but I have found some of it to not work for me when using more recent
versions of GoLang.

While starting out in my quest to learn more Go, I started to see what I need to do for configuring my Spacemacs editor to play well and help me without complaining about errors. This was not that straight forward and I will problably keep updating this area until I get it right.

1. Installation instructions for the `go layer` gave some conflicting information for the version of `go` that I currently am using which is `1.17.1`.
1. Configuring Spacemacs with `goenv` paths seemed to be missing from the internet.
1. Resolving issues with the `goldmark` error was also missing from the internet (at least for my situation, which turned out that `gopls` command was missing from my path)


#### Install packages

Keep in mind that I am using `GoLang 1.17.1` and this might not work for previous versions.

```
export GO111MODULE=on CGO_ENABLED=0
go install -v -trimpath -ldflags '-s -w' github.com/golangci/golangci-lint/cmd/golangci-lint@latest
go install -v golang.org/x/tools/cmd/godoc@latest
go install -v golang.org/x/tools/cmd/goimports@latest
go install -v golang.org/x/tools/cmd/gorename@latest
go install -v golang.org/x/tools/cmd/guru@latest
go install -v github.com/cweill/gotests/...@latest
go install -v github.com/davidrjenni/reftools/cmd/fillstruct@latest
go install -v github.com/fatih/gomodifytags@latest
go install -v github.com/godoctor/godoctor@latest
go install -v github.com/haya14busa/gopkgs/cmd/gopkgs@latest
go install -v github.com/josharian/impl@latest
go install -v github.com/rogpeppe/godef@latest
go install -v golang.org/x/lint/golint@latest
```

#### Helping Spacemacs

* Add the following to `~/.spacemacs`:

```lisp
     ;; go layer
     (go :variables
         go-backend 'lsp)
     ;; debug layer
     dap
     ;; autocompletion tries to make things easier
     auto-completion
     ;; verifying syntax
     syntax-checking
     ;; helpful vcs
     version-control
```

* Helping the editor of Spacemacs to know what paths are set from `goenv`:

```
M-x (exec-path-from-shell-copy-env)
```

Should get a prompt asking which environment variable you want to copy. I entered in `PATH`
and this pulled in all the settings about `goenv`.

* If you do not have `goenv` installed, then you might want the following variables loaded somewhere:

```bash
[ -d $HOME/go ] && export GOPATH="$HOME/go" || __debug "could not find $HOME/go"
[ -d $GOPATH ] && export PATH=$PATH:$GOPATH/bin
[ -d /usr/lib/go ] && export GOROOT="/usr/lib/go" || __debug "unable to find /usr/lib/go"
[ -d /usr/local/go ] && export GOROOT="/usr/local/go" || __debug "unable to find /usr/local/go"
```













### org-mode
