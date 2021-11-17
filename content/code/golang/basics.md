---
title: "Basics"
linktitle: "GoLang Basics"
date: 2021-11-06T09:10:14-07:00
draft: true
summary: "Information on GoLang"
toc: true  ## Show table of contents? true/false
type: book
---

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
