---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Centos Install Munin With Dynamic Graphs"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2013-01-04T08:26:52-08:00
lastmod: 2013-01-04T08:26:52-08:00
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
    - /articles/centos-install-munin-with-dynamic-graphs/
---


This took longer than it should have to get setup. For some reason, I could not find any references on how to get the dynamic zooming of munin to work. The documentation was not very helpful from the example provide (because it did not work) nor in ascertaining how to solve the problem. Anyways, here is my journey and configuration that will help me out the the future.

## Updates

*Update 10 April, 2013:* Munin version 2.0.10 now includes better support for dynamic zooming out of the box.

## Installation

### Yum installing

Because this was a vmware server on my laptop for testing munin, I went with both the node and the server installation.

```bash
yum install munin munin-node
```

This provide you with some files, directories, and programs to get munin up and running. 

### Directory permissions

First thing you have to do is check to make sure the temp directories are allowed for writing:

```bash
mkdir /var/lib/munin/cgi-tmp
mkdir /var/lib/munin/cgi-tmp/munin-cgi-graph
chmod 777 /var/lib/munin/cgi-tmp
chmod 775 /var/lib/munin/cgi-tmp/munin-cgi-graph
```

## Configuration

### Munin.conf

Next ensure you have the following in your /etc/munin/munin.conf file:

```cfg
dbdir /var/lib/munin
htmldir /var/www/html/munin
logdir /var/log/munin
rundir  /var/run/munin

# Where to look for the HTML templates
#
tmpldir /etc/munin/templates

# Where to look for the static www files
#
staticdir /etc/munin/static

# temporary cgi files are here. note that it has to be writable by 
# the cgi user (usually nobody or httpd).
#
cgitmpdir /var/lib/munin/cgi-tmp

# (Exactly one) directory to include all files from.
includedir /etc/munin/conf.d

graph_strategy cgi
html_strategy cgi
```

### Apache VirtualHost

Now comes the part where most of my time was wasted away by testing, debugging, then testing again. The Apache VirtualHost configuration for allowing dynamic zoom to work:

```apacheconf
<VirtualHost *:80>
  ServerAdmin webmaster@dev.example.com
  DocumentRoot /var/www/html/munin
  ServerName munin.example.com
  ErrorLog logs/munin-error.log
  CustomLog logs/munin-access_log common
  RewriteLog logs/munin-rewrite.log
  RewriteLogLevel 5
  ServerSignature Off

  # Rewrites
  RewriteEngine On

  # Static content in /static
  RewriteRule ^/favicon.ico /etc/munin/static/favicon.ico [L]
  RewriteRule ^/static/(.*) /etc/munin/static/$1          [L]
  # If it has the word static in the path, send to the static dir
  RewriteRule ^/.*/static/(.*) /etc/munin/static/$1          [L]

  # HTML
  RewriteCond %{REQUEST_URI} .html$ [or]
  RewriteCond %{REQUEST_URI} =/
  RewriteRule ^/(.*)          /var/www/cgi-bin/munin-cgi-html/$1 [L]

  # Images
  RewriteRule ^/(.*) /var/www/cgi-bin/munin-cgi-graph/$1 [L]

  # Ensure we can run (fast)cgi scripts
  <Directory "/var/www/cgi-bin">
    Options +ExecCGI
    <IfModule mod_fcgid.c>
        SetHandler fcgid-script
    </IfModule>
    <IfModule !mod_fcgid.c>
        SetHandler cgi-script
    </IfModule>
  </Directory>
</VirtualHost>
```