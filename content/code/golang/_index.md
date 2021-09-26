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

[Bugs](https://www.dolthub.com/blog/2021-09-03-golang-time-bugs/)

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

### Installation

I really like to use shell scripts to take care of all my setups. So, I am going to tell you (as well as myself) to use the [LibSh Project](/project/libsh) file called [go.sh](https://github.com/aaronaddleman/libsh/blob/master/go.sh) which should have a utility to do installation. Currently the function is called `go_install_goenv` which gives you the ability to select Go versions.

After you have this installed `LibSh` should pick it up and load it and give you the necessary settings for your environment to continue working.

Here are a couple of things to check your environment is good to Go (see what I did there? yah that was a pun on purpose...)

* Checking what Go can see

This is the command that will dump a ton of things, but of the output we are looking for *GOPATH* and *GOROOT*. These variables will need to point to the same version you want to use. If they do not line up, then set with `goenv local #.#.#` to set your version for the project, or use `goenv global #.#.#` to set globally.

```
# set version in .go-version
goenv local 1.15.7
# check version
go version
# output should be:
# go version go1.15.7 darwin/amd64
#
# check go env
go env | grep -E "PATH|ROOT"

# output should be:
GOPATH="/Users/addlema/go/1.15.7"
GOROOT="/Users/addlema/.goenv/versions/1.15.7"
```
