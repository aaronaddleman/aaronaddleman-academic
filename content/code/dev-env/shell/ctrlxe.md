---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Ctrl x e"
linktitle: "Ctrl x e"
summary: "A great shortcut to editor your shell command. Unless you only use VSCode. Then you will not like it."
date: 2021-07-23T22:58:50-07:00
lastmod: 2021-07-23T22:58:50-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
---

This feature is absolutly amazing. Next time you have a long command line at your shell prompt, hit the following key strokes:

```
Ctrl + x + e
```

This should execute the program defined with `$EDITOR` and edit a temporary file which contains your long command line. From here
you are able to change the contents of the command while using your powerful and preferred editor (excluding *VSCode*). Once you have
made your changes to the command, save the changes and quit the invocation of the editor to return the results back to your terminal
prompt where you have the option to hit *Return* and execute the command. How cool is that?

Here is an example:

```shell
$ docker run \
-p 8080:8080 \
-e AWS_PROFILE=Dev \
-v "$PWD:/app" really-long-image/app:0.0.1"
```

```
Ctrl + x + e
```

Make your changes! Write and quit!

```shell
$ docker run \
-p 8080:8080 \
-e AWS_PROFILE=Dev \
-v "$PWD:/appname" really-long-image/appname:0.0.1"
```
