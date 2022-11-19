---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "XBee getting started - Part 2"
subtitle: "Lets try to figure more things"
summary: "Making some progress with XBee and MicroPython"
authors: []
tags: []
categories: ['iot']
date: 2022-11-07T20:50:56-08:00
lastmod: 2022-11-07T20:50:56-08:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: Photo by <a href="https://unsplash.com/@npi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pavel Neznanov</a> on <a href="https://unsplash.com/s/photos/mesh-network?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

## Learning some more...

When trying to pick back up where I left off, I ran into some really interesting issues. At first I thought I was going a little crazy and also sort of kicking myself for not writing down more details. But I think now I realized that I just got a little bit lucky last time and the 2nd time highlighted some issues.

* Use a proper USB-A to MicroUSB

This one is super important because there are different types of USB-A to MicroUSB cables. I found one that I think was just for charging and not for passing data. So ya... make sure you have one that passes data.

* Take note of the baud speed and other settings for your board.

I was lucky that I recalled the speed rate and some hardware flow control settings, but if I did not recall these settings, then I guess I would be reading up on how to do a full reset of the board instead of just picking up where I left off.

## My current settings

```
115200/8/N/1/H - AT
```

Just by reading and typing that brings back so many memories of using dial up modems back in the old days of dial up and com settings for Sun Micro systems. Installing an OS over a COM port! Such a wonderful feeling... uhoh.. sorry. I went off topic.

## Challenge #1: Pair the unit with Sonoff Zigbee bridge

What I had to do was set the option of ZS to have a value of `2` which allows for the professional mode to pair with 3rd party hardware. After doing a reset of the module and having the Sonoff scan for devices, it showed up!
