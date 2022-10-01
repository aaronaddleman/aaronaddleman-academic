---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Tools"
linktitle: "Tools"
summary:
date: 2021-05-11T18:43:44-07:00
lastmod: 2021-05-11T18:43:44-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
---

## docker

### Scanning

While this tool did not give great information, this might be helpful in the future for scanning properites of a Redis Database.

```Dockerfile
FROM redis
RUN apt update
RUN apt install -y git ruby ruby-dev build-essential
RUN git clone https://github.com/snmaynard/redis-audit.git
RUN cd redis-audit
RUN gem install bundler
RUN bundle update --bundler
RUN ruby redis-audit.rb -h hostname.to.redis -s 10
```
