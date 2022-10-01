---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Commands"
linktitle: "Commands"
summary:
date: 2021-05-11T18:43:32-07:00
lastmod: 2021-05-11T18:43:32-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
---

## Connecting

```
docker run -it redis redis-cli -h hostname-for-redis
```

## Help

You can get help of many commands by just using `help`!

```
> help select

  SELECT index
  summary: Change the selected database for the current connection
  since: 1.0.0
  group: connection

>
```

or by typing `help ` followed by a TAB to cycle through all the commands available.


## Listing data

### CRUD Keys


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

## Databases

Redis provides databases to help separate different kinds of keys. The [SELECT Docs](https://redis.io/commands/select) provide more information.

Rules:

* A Redis cluster only supports database `0`.
* Up to the redis client to select the database on each connection.
* `CLIENT LIST` shows the clients and their selected databases.

To select the database of id `1`:

```
SELECT 1
```
