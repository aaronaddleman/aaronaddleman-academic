---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Best Practice"
linktitle: "Best Practice"
summary:
date: 2021-05-11T20:36:54-07:00
lastmod: 2021-05-11T20:36:54-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
---

* General
  * Think about the TTL of your keys to not run out of memory
  * Redis is not always up from the client's perspective. Make sure to enable reconnect if consistency is important
* AWS
  * Upgrading sometimes leads to small amounts of downtime
  * Older versions do not support KMS encryption
