---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "GoLang"
linktitle: "GoLang"
summary: "The language brought to us by some really smart professors funded by Google."
date: 2020-12-15T09:14:27-08:00
lastmod: 2020-12-15T09:14:27-08:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
---

The GoLang, Go, or Go Language, is a very nice language used by many projects. Started by Google, they asked some smart people from Berkely (and other places) to create a language that could be simple to write and build like C for compatability to other architectures.

## Articles

[Rob Pike interview for Evrone: "Go has become the language of cloud infrastructure"](https://evrone.com/rob-pike-interview)

## Tools

### Tracing

[Jaeger-UI](https://github.com/jaegertracing/jaeger-ui)

[Zipkin](https://github.com/openzipkin-contrib/zipkin-go-opentracing)

### Sharing Quickly

Using https://play.golang.org/ to quickly share code and ask questions. Allows people to execute the code in quick mannor and within a shared environment.

### Versions

I like to stay away from global installs of my tools and this is another one of those projects that lets you install multiple versions and select the one for your project.

[GoEnv](https://github.com/syndbg/goenv)

### Quality

[Go Report Card | Go project code quality report cards](https://goreportcard.com/)

## Setup

To get your environment setup, there needs to be some things installed. The following packages are helpful:

```
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
```
