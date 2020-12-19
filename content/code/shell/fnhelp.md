---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Fnhelp"
linktitle: "Fnhelp"
summary:
date: 2020-12-15T09:13:45-08:00
lastmod: 2020-12-15T09:13:45-08:00
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

## adding help to a function

My pattern for how to show help of a function:

```bash
aws_vpcs_cidr() {
    local help=$(cat <<HELP
## aws_vpcs_cidr

List cidr blocks for vpcs in current account

Eg.

...shell
aws_vpcs_cidr
...

HELP
          )
    [[ "${1}" =~ "-help"$ ]] && libsh__help_doc "$help" && return 0
```
