---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Variables"
linktitle: "Variables"
summary:
date: 2020-12-15T10:15:21-08:00
lastmod: 2020-12-15T10:15:21-08:00
draft: false  # Is this a draft? true/false
toc: false  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  Shell:
    parent: Shell
    weight: 1
---

## testing a variable matches a pattern

```bash
# starts with a 1.*
[[ $AWS_CLI_VERSION =~ '^1.*' ]] && export LIBSH_AWS_CMD="aws"
# starts with a 2.*
[[ $AWS_CLI_VERSION =~ '^2.*' ]] && export LIBSH_AWS_CMD="aws --no-cli-pager"
```

## multiple testing of variables

```bash
[[ ! -z ${ENABLE_GIT_COMMIT_TEMPLATE} && -f $ENABLE_GIT_COMMIT_TEMPLATE ]] || \
    libsh__debug "Missing file for git commit template"
```

## creating vars name based on vars

```bash
# set a variable
local fn="custom_name"
# set the template of the var
local fn_varname="LIBSH_status_fn_${fn}"
# set the new var
# in this case, it should be "LIBSH_status_fn_custom_name" contains the value "loaded"
#
# note: the fn_varname is required to be a single var in the printf. You cannot put in
# your own vars and mash them together
printf -v "$fn_varname" '%s' "loaded" && \
```
