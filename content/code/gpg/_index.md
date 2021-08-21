---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Gpg"
linktitle: "Gpg"
summary: "Things and stuff about GPG that I dont want to remember because I only use about once a year...if that."
date: 2021-08-21T11:42:54-07:00
lastmod: 2021-08-21T11:42:54-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  Gpg:
    name: Gpg
    # parent: YourParentID
    weight: 1
---

## Summary

GPG/PGP keys are great. Encryption...hiding things...all good stuff from prying eyes. Configuring and keeping updated with the changes is annoying. This brings us to this document.

## Listing keys

```shell
gpg --list-keys
```

Should show the following output. Take note that the 0's are to avoid outdated information:

```
/Users/addlema/.gnupg/pubring.kbx
---------------------------------
...trimmed...
➜ gpg --list-keys
/Users/addlema/.gnupg/pubring.kbx
---------------------------------
pub   rsa4096 0000-00-00 [SC]
      0000000000000000000000000000000000000000
uid           [ unknown] Benjamin Peterson <bp@benjamin.pe>
uid           [ unknown] Benjamin Peterson <bp@benjamin-peterson.org>
uid           [ unknown] Benjamin Peterson <benjamin@python.org>
sub   rsa4096 2013-10-09 [E]

pub   dsa2048 2010-08-19 [SC] [expires: 2024-05-11]
      0000000000000000000000000000000000000000
uid           [ unknown] GPGTools Team <team@gpgtools.org>
uid           [ unknown] [jpeg image of size 6329]
sub   rsa4096 2014-04-08 [S] [expires: 2024-05-11]
sub   rsa4096 2020-05-11 [E] [expires: 2024-05-11]

pub   rsa4096 2020-05-04 [SC] [expires: 2024-05-03]
      0000000000000000000000000000000000000000
uid           [ unknown] GPGTools Support <support@gpgtools.org>
sub   rsa4096 2020-05-04 [E] [expires: 2024-05-03]

pub   rsa4096 2017-03-04 [SC] [expires: 2022-08-28]
      0000000000000000000000000000000000000000
uid           [ unknown] Aaron Z. Addleman <aaronaddleman@gmail.com>
```

Listing the signatures allows for showing the short form of the key id:

```
gpg --list-signatures
```

## Tools for macOS

I like the GPG Tools suite over at https://gpgtools.org/ they are really handy and monitor the clipboard for any keys that exist. When you copy a private or public key while the application is open will prompt for importing.
