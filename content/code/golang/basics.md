---
title: "Basics"
linktitle: "GoLang Basics"
date: 2021-11-06T09:10:14-07:00
draft: true
summary: "Information on GoLang"
toc: true  ## Show table of contents? true/false
type: book
---

## Installation

Best done with `goenv` and the Libsh project handles this to a function for making this easier to manage. Here are some things below to remember when taking on this task:

1. If you install a version with `goenv install #.#.#` and go is not available there is a good chance that the architecture for the version desired was not found. Best to find a new or later version that supports the architecture you are using.

## Making a project

```
mkdir go-contract
cd go-contract
```

```
# this is where the module will be shared
go mod init github.com/aaronaddleman/go-contract
```

```
git init .
```

## main.go
```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, world.")
}
```

## build and run

```
go build -o contract
ls -al
./contract
```

## install it

```
go install .
```

```
which go-contract
```
