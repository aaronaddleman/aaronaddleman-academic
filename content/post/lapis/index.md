---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Building and installing Lapis with OpenResty"
subtitle: "Running OpenResty and making applications with Lapis"
summary: "Running OpenResty and making applications with Lapis"
authors: []
tags: []
categories: []
date: 2016-02-02T21:18:29-08:00
lastmod: 2016-02-02T21:18:29-08:00
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
    - /articles/lapis
---

## What

Lapis web framework running on top of OpenResty with LuaJit

## Why

Trying out a new framework for me called Lapis. Built on top of OpenResty making for fast rendering of content with LuaJit compiling. I decided to record down my findings for how to accomplish using Lapis tonight.

I started with Ubuntu 15 and the rest is a summary of:

1. build + install OpenResty
1. testing OpenResty
1. install Lapis
1. testing Lapis with sample Lua application

For now, this is a good starting point. Next up, I would like to try sending queries to a database.

## How

### Install OpenResty 1.9.7.3

```shell
sudo apt-get install git libreadline-dev libncurses5-dev libpcre3-dev \
    libssl-dev perl make build-essential perl make libssl-dev \
    postgresql-9.4 postgresql-server-dev-9.4 postgresql-contrib-9.4
    
./configure --with-cc-opt="-I/usr/include/openssl -I/usr/include" \ 
--with-ld-opt="-L/usr/include/openssl -L/usr/include" -j8 \ 
--prefix=/opt/openresty-1.9.7.3 \
--with-pcre-jit \
--with-ipv6 \
--with-http_postgres_module

# make with 4 spare cpu power
make -j4
# install
make install
```

### Make a plain app to test OpenResty

#### Create the application

```bash
mkdir ~/work
cd ~/work
mkdir logs/ conf/
```

#### Create nginx configuration file

Contents of ~/conf/nginx.conf

```
worker_processes  1;
error_log logs/error.log;
events {
    worker_connections 1024;
}
http {
    server {
        listen 8080;
        location / {
            default_type text/html;
            content_by_lua '
                ngx.say("<p>hello, world</p>")
            ';
        }
    }
}
```

#### Start the applicatoin

To start the application you need to load your environment's path with the custom nginx binary that is compiled with OpenResty

```
PATH=/opt/openresty-1.9.7.3/nginx/sbin:$PATH
export PATH
nginx -p `pwd`/ -c conf/nginx.conf
```

We are now ready to test the application with a curl call

```
curl http://localhost:8080/
```

The expected output should be:

```html
<p>hello, world</p>
```

### Lapis

Now that we have the OpenResty confirmed working, time to move on to the Lapis framework.

#### Install Lapis

```
apt-get install luarocks
luarocks install moonscript
luarocks install lapis
luarocks install --server=http://rocks.moonscript.org/manifests/leafo lapis
```

#### Make a test application

```
mkdir lapistest
cd lapistest
lapis new --lua
lapis server
```

#### Test the application with curl!

```
curl http://localhost:8080
```

You should see the following:

<!DOCTYPE HTML><html lang="en"><head><title>Lapis Page</title></head><body>Welcome to Lapis 1.4.3</body></html>
