---
title: Syntax
linktitle: Syntax
toc: true
type: docs
date: "2019-05-05T00:00:00Z"
draft: true
menu:
  makefile:
    parent: Makefile
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

## overview

Makefile has been around for ever helping projects build targets and execute tasks. It works and has seldome changed at all. [Full documenation on Makefile](https://www.gnu.org/software/make/manual/make.html) covers every aspect of its features. I have included some of my most used patterns for specific purposes.

## phony targets

Allows you to have a recipe called `clean` and is executed by running `make clean` even though it does not make a file called `clean`, it can be run everytime.

```makefile
.PHONY: clean
clean:
        rm *.o temp
```

Making sub-directories and using phony is helpful when trying to maintain future options of running things in parallel:

```makefile
SUBDIRS = foo bar baz

.PHONY: subdirs $(SUBDIRS)

subdirs: $(SUBDIRS)

$(SUBDIRS):
        $(MAKE) -C $@

foo: baz
```
