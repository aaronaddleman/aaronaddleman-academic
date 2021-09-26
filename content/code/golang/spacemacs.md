---
## Documentation: https://wowchemy.com/docs/managing-content/

title: "Spacemacs"
linktitle: "GoLang in Spacemacs"
summary: "Making the IDE of Spacemacs work with GoLang"
date: 2020-12-15T09:14:27-08:00
lastmod: 2020-12-15T09:14:27-08:00
draft: false  ## Is this a draft? true/false
toc: true  ## Show table of contents? true/false
type: book  ## Do not modify.
---

## Context

If you do not use Spacemacs, you might as well go to some other page and skip this content
and head on over to [/code/spacemacs](/code/spacemacs) or [maybe read why I use Spacemacs](/code/dev-env/editors/spacemacs/#why-i-use-it).

**_But, if you are using Spacemacs read on!_**

## The problem(s)

While starting out in my quest to learn more Go, I started to see what I need to do for configuring my Spacemacs editor to play
well and help me without complaining about errors. This was not that straight forward and I will problably keep updating this
area until I get it right.

1. Installation instructions for the `go layer` gave some conflicting information for the version of `go` that I currently am using which
is `1.17.1`.
1. Configuring Spacemacs with `goenv` paths seemed to be missing from the internet.
1. Resolving issues with the `goldmark` error was also missing from the internet (at least for my situation, which turned out that `gopls` command was missing from my path)

## Solutions

Keep in mind that I am using `GoLang 1.17.1` and this might not work for previous versions.

### Install packages

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

### Helping Spacemacs

* Add the following to `~/.spacemacs`:

```
     (go :variables
         go-backend 'lsp)
     dap
     auto-completion
     syntax-checking
     version-control
```

* Helping the editor of Spacemacs to know what paths are set from `goenv`:

```
M-x (exec-path-from-shell-copy-env)
```

Should get a prompt asking which environment variable you want to copy. I entered in `PATH`
and this pulled in all the settings about `goenv`.
