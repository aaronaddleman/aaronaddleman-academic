---
title: Show help
linktitle: Show help
toc: true
type: docs
date: "2019-05-05T00:00:00Z"
draft: false
menu:
  makefile:
    parent: Makefile
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

## overview

Almost everyone I talk to eventually says:

> Can you write a help cmd for it?

So, after searching the internet and trying some options, I have
arrived at this boiler plate for my Makefiles. The setup is easy
where you define the help method and for any method you want to
provide some short description of how to use just add the following

```makefile
coolfn: ## help string here
```

The result is allowing the consumer of this Makefile to run a help
command and all of the functions you marked with `## some text` will
be listed for their enjoyment of reading. 

## example

Here is a full example of a Makefile with this method applied:

```makefile
#
# Variables
#
ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

# Before we start test that we have the mandatory executables available
EXECUTABLES = git docker
K := $(foreach exec,$(EXECUTABLES),\
$(if $(shell which $(exec)),some string,$(error "No $(exec) in PATH, consider installing $(exec)")))


.PHONY: help up down status post bake push registry docker-up docker-down

help:
  @grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

registry-up: ## start the local docker registry
  @docker ps | grep -q 'registry\:2' || docker service create --name registry --publish published=5000,target=5000 --mount type=bind,source=$(ROOT_DIR)/registry_root,destination=/var/lib/registry registry:2

registry-down: ## stop the local docker registry
  @echo "removing docker registry"
  @docker service rm registry
```
