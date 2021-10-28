---
## Documentation: https://wowchemy.com/docs/managing-content/

title: "Errors"
linktitle: "GoLang Errors"
summary: "GoLang Errors"
date: 2021-10-14T09:14:27-08:00
lastmod: 2021-10-14T09:14:27-08:00
draft: false  ## Is this a draft? true/false
toc: true  ## Show table of contents? true/false
type: book  ## Do not modify.
---

Reading errors is most of what programming is... at least in my opinion. I found while I can read and write code, I become faster at making important decisions when I can decide the most important parts of an error message that are telling me what is wrong with the code. Here are some examples of what I have come across while making errors of GoLang and its code it caused.


## invalid memory address or nil pointer

The Error

```
panic: runtime error: invalid memory address or nil pointer dereference [recovered]
        panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x0 pc=0x10e445c]

goroutine 7 [running]:
testing.tRunner.func1.2({0x10f5fe0, 0x11e83d0})
        /Users/addlema/.goenv/versions/1.17.1/src/testing/testing.go:1209 +0x24e
testing.tRunner.func1()
        /Users/addlema/.goenv/versions/1.17.1/src/testing/testing.go:1212 +0x218
panic({0x10f5fe0, 0x11e83d0})
        /Users/addlema/.goenv/versions/1.17.1/src/runtime/panic.go:1038 +0x215
personal-budget/module2.CreateBudget(...)
        /Users/addlema/src/github.com/golang-personal-budget-cli/module2/budget_2.go:81
personal-budget/module2.TestCreateValidBudgetAddsToReport(0xc0001304e0)
        /Users/addlema/src/github.com/golang-personal-budget-cli/module2/budget_2_test.go:70 +0x5c
testing.tRunner(0xc0001304e0, 0x1118490)
        /Users/addlema/.goenv/versions/1.17.1/src/testing/testing.go:1259 +0x102
created by testing.(*T).Run
        /Users/addlema/.goenv/versions/1.17.1/src/testing/testing.go:1306 +0x35a
FAIL    personal-budget/module2 0.693s
FAIL
```

I found some of the following things of this panic runtime error:

1. the path of the object and the function
1. the path of the file and the line number, which is `81`
1. the way this function got called from the top to the bottom

```
personal-budget/module2.CreateBudget(...)
        /Users/addlema/src/github.com/golang-personal-budget-cli/module2/budget_2.go:81
```

The code that caused it

```
newBudget.Max = max
```

The fix is actually supposed to be this:

```
newBudget = &Budget{Max: max}
```

Which is settings a variable to be the `Struct`'s address and assigning the `Max` attribute with the value that is stored in `max`.
