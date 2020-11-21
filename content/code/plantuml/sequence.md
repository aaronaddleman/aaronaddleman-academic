---
title: Sequence
linktitle: Sequence
toc: true
type: docs
tags: ["graphs"]
date: "2020-11-07T07:28:00Z"
draft: false
menu:
  plantuml:
    parent: Plantuml
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

Used mostly for describing the process of a GET or POST verbs of a project.
Here are some examples I use for making these diagrams:

## simple

Plain example of some interactions between Bob and Alice.

```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml
```

## participants

```plantuml
@startuml
actor Foo1
boundary Foo2
control Foo3
entity Foo4
database Foo5
collections Foo6
Foo1 -> Foo2 : To boundary
Foo1 -> Foo3 : To control
Foo1 -> Foo4 : To entity
Foo1 -> Foo5 : To database
Foo1 -> Foo6 : To collections
@enduml
```
