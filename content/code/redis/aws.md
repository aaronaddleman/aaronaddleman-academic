---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Aws"
linktitle: "Aws"
summary:
date: 2021-05-11T18:37:47-07:00
lastmod: 2021-05-11T18:37:47-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
---

## Security

* Have to allow the port `6397` inbound with the CIDR which you allow access
* Always enable all possible encryption.
* Enabling AUTH requires adding the following changes to the redis cli:
  * `--tls`
  * `-a PASSWORD`
