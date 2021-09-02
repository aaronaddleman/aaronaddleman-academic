---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Gitconfig"
linktitle: "Gitconfig"
summary:
date: 2021-07-23T22:57:34-07:00
lastmod: 2021-07-23T22:57:34-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
---

Gitconfig is a interesting file when you are able to use an if statement based on the directory of a project. Below is my tree for projects that both define
personal and professional configurations. This allows me

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

In my `$HOME/.gitconfig` file I have the following:

```
[includeIf "gitdir:~/src/github.com/"]
	path = .gitconfig-personal
[includeIf "gitdir:~/src/git.worksite.com/"]
	path = .gitconfig-work
```

Then in my `$HOME/.gitconfig-personal`, I use the following content:

```
[user]
name = Aaron Addleman
email = aaronaddleman@gmail.com
signingkey = FCF6C3A2140015F9

[commit]
gpgSign = true
```

The other file of `$HOME/.gitconfig-work` shares the same name, but a different email address. This helps
automatically set the Name and Email settings for git projects based on the top level directory they reside within.
