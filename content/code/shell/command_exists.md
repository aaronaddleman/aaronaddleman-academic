---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Command_exists"
linktitle: "Command_exists"
summary:
date: 2020-12-15T10:12:58-08:00
lastmod: 2020-12-15T10:12:58-08:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
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

## Testing a command exists

Method 1

```bash
if command -v jq > /dev/null; then
  JQ_EXISTS=t
else
  JQ_EXISTS=f
  return 1
fi
```

Method 2

```bash
command -v figlet > /dev/null 2>&1
[ "$?" = 0 ] || __exit_with_message "ERR" "Figlet missing"
```
