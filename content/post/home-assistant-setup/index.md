---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Home Assistant Setup"
subtitle: "How I created my home assistant setup"
summary: "Home Assistant is super easy and here are my notes and resources of what I used to create my home assistant"
authors: []
tags: ["HomeAssistant"]
categories: []
date: 2021-03-07T09:13:06-08:00
lastmod: 2021-03-07T09:13:06-08:00
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
---

## Summary

## Community Addons

### PurpleAir

```shell
# define where configuration.yml lives
export HAHOME=/root/config
cd $HAHOME/custom_components
git clone https://gitlab.com/gibwar/home-assistant-purpleair /tmp
mv /tmp/home-assistant-purpleair/custom_components/purpleair $HAHOME/custom_components/
```

Reload the HA and you should have a new integration which asks for a JSON url. Visit the [purpleair map](https://www.purpleair.com/map?opt=1/mAQI/a10/cC0#8.06/37.916/-122.918) and locate the sensor you want to add. Find its JSON url and use it with the integration. This will provide you with 2 sensors: 

1. Air Quality Index (best with a gauge)
1. Sensor Status

### Todoist

This is now standard with Home Assistant. To add is very simple:

```yaml
calendar:
  - platform: todoist
    API: <api key from todoist>
```

