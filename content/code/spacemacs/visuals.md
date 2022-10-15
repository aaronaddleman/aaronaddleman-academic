---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Visuals"
linktitle: "Visuals"
date: 2021-12-03T10:21:51-08:00
type: book
summary: "Making spacemacs look better"
---

## Long writing

To make the buffer look very nice for long amounts of content writing of paper(s) or book(s) I suggest you take a look at https://github.com/rnkn/olivetti for a centered look and less distractions.

## Word wrapping

Sometimes I want to break the line on a complete word and wrap the line around. To enable this, run the following:

### Wrap to new line

This will take your long lines and break them up into new lines

```lisp
(auto-fill-mode)
(toggle-word-wrap)
```

### Truncate lines

```
(toggle-truncate-lines)
```

### OrgMode

And if you  are in  Org-Mode:

```
(org-indent-mode)
```
