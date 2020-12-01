---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Rewritemap Mod Rewrite With Apache"
subtitle: "Making massive rewrites with ModRewrite and Apache"
summary: "The ModRewrite for Apache allows for doing massive redirects with Apache."
authors: []
tags: []
categories: []
date: 2012-12-30T09:13:05-08:00
lastmod: 2012-12-30T09:13:05-08:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
aliases:
    - /articles/rewritemap-mod-rewrite-with-apache/
---

After using the rewritemap a couple of times for certain projects I needed to make some notes about its use.

## Using the text format

Here is a config that I have been using recently that has been doing the job pretty good:

### apache config

```apacheconf
### define the map
RewriteMap urlmap txt:/etc/apache2/map.txt

### turn on rewrite engine
RewriteEngine on
RewriteLog "/var/log/apache2/domain.rewrite.log"
RewriteLogLevel 5

### redirect domain.com to www.domain.com
RewriteCond %{HTTP_HOST} ^domain.com
RewriteRule ^/(.*)$ http://www.domain.com/$1 [R=permanent,L]

### Ignore Matching Directories
RewriteRule ^/(files|js|file.php|themes) - [L,NC]

### require a match in the map to continue
RewriteCond ${urlmap:/$1} ^.+

# Choose one of the following rewrite rules:

### rewrite the entire request and return the value from the map file
RewriteRule ^/(.+)$ ${urlmap:/$1} [R,L]
### rewrite the entire request to a new domain
RewriteRule ^/(.+)$ http://www.newdomain.com/${urlmap:/$1} [R,L]
```

### map file /etc/apache2/map.txt

The map file is a key and value based text file that is split up by a single space. Below is a sample of the files I have used:

```bash
/sitemap.xml /sitemap
/path/one /better/path/
```

## Using the DBM format

Using the DBM format has said to be faster if your text file is too large. To switch from your text method to the DBM method, you need to convert the text file into a database that Apache can read.

### How to convert the text file

```bash
httxt2dbm -i /etc/apache2/map.txt -o /etc/apache2/map_db
```

This command takes the input of the map.txt and outputs two files called:

- /etc/apache2/map_db.dir
- /etc/apache2/map_db.pag

I have used this database by having the following code in my Apache configuration file:

```apacheconf
RewriteMap urlmap dbm:/etc/httpd/mod_rewrites/map_redirct.map
```

Notice that the difference is `dbm:` instead of `txt:` which allows Apache to use the dbm format. There are other formats but I have not tried them all yet:


    -f    DBM Format.  If not specified, will use the APR Default.
          GDBM for GDBM files (unavailable)
          SDBM for SDBM files (available)
          DB   for berkeley DB files (available)
          NDBM for NDBM files (unavailable)
          default for the default DBM type
