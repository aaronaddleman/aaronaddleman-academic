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

Est exercitation non id duis nisi ex nulla duis exercitation occaecat dolore. Nulla consectetur mollit cupidatat pariatur ut. Velit ea in sint consequat magna. Quis sint labore commodo quis laboris deserunt. Pariatur ut et ipsum veniam est officia exercitation elit eiusmod anim ea duis velit incididunt. Proident commodo tempor voluptate anim nisi ut. Cupidatat occaecat anim qui ipsum.

Dolore ad ipsum sunt sunt cupidatat ex sit. Ea velit in esse pariatur irure irure pariatur ullamco anim labore duis nulla. Sit ea nulla officia pariatur officia et ut duis sint ea. Nostrud ullamco esse deserunt eu nisi reprehenderit do. Deserunt voluptate duis deserunt ut laboris officia. Veniam sit eu cupidatat incididunt. Voluptate nisi cupidatat officia ea.

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
