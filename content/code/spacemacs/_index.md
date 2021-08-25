---
title: "Spacemacs"
linktitle: "Spacemacs"
summary: "What is it and how to use it. I have been flopping between this editor and VSCode and while both have their strengths, I have enjoyed Spacemacs a little bit more. Anyways, here are my notes on how to use it."
date: 2021-05-10T08:43:51-07:00
draft: false  # Is this a draft? true/false
type: book  # Do not modify.
---


Emacs vs. Vim - the age old battle... but thats boring. Lets combine them! Enter: Spacemacs. The place you can choose your editor and still benifet from Emacs rich library of syntax and extensibility with Lisp. Lets
face it, all things _could be_ traced back to influence from Lisp. So lets start with that as some features of Spacemacs:

(Note: All docs here are using the Vim Mode for Spacemacs. Sometimes the docs will include the Control Tower mode and it will be noted.)

## Features

1. Could use Lisp (so far, I have not created my own and still get pretty far...)
1. Possible to never use the mouse
1. GUI comes second, commands come first (aka, you dont have to wait for the UI to render if you know the command)
1. Config and upgrading are under git control

## Layers

* TL;DR
  * [list of layers][1]

Within the Spacemacs area, everything is a layer. Outside of Spacemacs, you have the MELPA packages. The Spacemacs Community makes it pretty easy to
add layers to your config by [listing most of the layers][1] you can choose to have installed.


[1]:https://www.spacemacs.org/layers/LAYERS.html
