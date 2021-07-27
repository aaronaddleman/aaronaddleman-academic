---
title: "Source"
linktitle: "Source"
summary:
date: 2021-07-23T22:54:51-07:00
lastmod: 2021-07-23T22:54:51-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book # Do not modify.
---

How you write your code is probably different for everyone, but over the years, I have developed a system that has proved
itself useful for a couple of years now and makes things super simple for organizing. Here is my home directory source
tree setup with some short descriptions of each location:

```
/Users/addlema
├── .sh.d
├── src
│   ├── git.worksite.com
│   └── github.com
├── .gitconfig
├── .gitconfig-personal
├── .gitconfig-work
```

Overall, my pattern has been to keep work in the `git.worksite.com` and my public projects in `github.com`. Pesonal projects are also kept in `github.com` but
that is a preference of mine as I am not writing any software that is making any money. If that were the case, I would be using a separate computer and not
the company's property to create the product.

{{< list_children >}}
