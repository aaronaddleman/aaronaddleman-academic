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
draft: true

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

## Door sensor

As I take small steps with the Home Assistant and some other sensors, I get closer to understanding what is possible and the hidden errors that await me down the road as I put these additions to the test.

This goal is about tracking the state of the freezer door of the garage freezer. The reason for doing this is a couple times now the door has been open just a little bit and lets out too much cold air which ruins the food inside. The magnetic reed switch is so simple. By using a magnetic fields, it sends an "on" or "off" state of the switch which will all Home Assistant to monitor the door activity.

Below I have the code and wiring guide of how I set this up.

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

binary_sensor:
  - platform: gpio
    name: "Freezer Door is Closed"
    pin:
      number: 4
      mode: INPUT_PULLUP
```

## Wiring

![magnetic_reed_switch_bb](/media/magnetic_reed_switch_bb.png)

As the diagram displays the magnetic reed switch, there are two terminals displayed, but in my case I actually have three:

* `com` = `common`
* `no` = `normally open`
* `nc` = `normally closed`

Here in my diagram, I have the `com` hooked up to `GRD` and the `nc` hooked up to `PIN 4` which is part of the `GPIO` group of pins.

[ESPHome GPIO docs](https://esphome.io/components/binary_sensor/gpio.html?highlight=gpio) have some good notes on what configuration options you can use with the basic GPIO binary sensor.

## Alerting

...
