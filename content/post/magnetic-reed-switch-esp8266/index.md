---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Magnetic Reed Switch Esp8266"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-04-11T09:52:21-07:00
lastmod: 2021-04-11T09:52:21-07:00
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

## code

```yaml
esphome:
  name: garage_freezer_door
  platform: ESP8266
  board: huzzah

wifi:
  ssid: !secret wifi_name
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Garage Freezer Door"
    password: !secret ota_password

captive_portal:

# Enable logging
logger:

# Enable Home Assistant API
api:
  password: !secret ha_api_password

ota:
  password: !secret ota_password


# binary_sensor:
#   - platform: gpio
#     pin:
#       number: 4
#       mode: INPUT_PULLDOWN_16
#       inverted: True
#     name: "garage_freezer_door"
#     device_class: door

binary_sensor:
  - platform: gpio
    name: "Garage Door is Open"
    pin:
      number: 4
      mode: INPUT_PULLUP
```

wiring:
  no -> PIN 4
  com -> GND
