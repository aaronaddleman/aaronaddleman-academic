---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Redis"
linktitle: "Redis"
summary: "My notes and commands about the Redis Database"
date: 2021-03-12T15:22:23-08:00
lastmod: 2021-03-12T15:22:23-08:00
draft: true  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  redis:
    name: Redis
    # parent: YourParentID
    weight: 1
---

Redis is a database that is fast and holds things in memory. Here are my collection of notes and commands about this system

## Best practice

* Think about the TTL of your keys to not run out of memory

## Redis commands

### connecting to a redis host:

```
docker run -it redis hostname-for-redis
```

### Listing keys

list all of the keys 0(n):

```
KEYS *
```

list all members in a set:

```
SMEMBERS key
```

Get a value of a key

```
GET keyname
```

Show the type of value being stored in a key

```
TYPE keyname
```

### Deleting keys

```shell
docker run -it redis "redis-cli -h hostname.to.redis --scan --pattern 'Key_Pattern*' | xargs redis-cli DEL"
```

## Tools

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
