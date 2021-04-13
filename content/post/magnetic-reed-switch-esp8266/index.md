---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Magnetic Reed Switch Esp8266"
subtitle: "Using magnetic on/off sensor to detect a door's status"
summary: "I wanted to detect when my freezer door opens or closes to get more data on when the tempurature drops. This also is an attempt at trying to create an alarm if the door is not closed all the way."
authors: []
tags: ['esp8266', 'homeassistant', 'sbc']
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
projects: ['sbc-sensors']
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

This was a little confusing at first, then it worked.. but I did not like the way it worked... then I found *automations*... then I broke everything... and trying to fix it.
First I started with modifying the `configuration.yaml` file and added the following code:

```yaml
alert:
  freezer_door:
    name: Freezer Door
    done_message: Freezer Door now closed
    entity_id: binary_sensor.freezer_door_is_closed
    state: "off"
    repeat: 1
    can_acknowlege: true
    skip_first: false
    notifiers:
      - mobile_app_aaron_iphone
```

All of this information came from looking up the available sensor names and status/states from the *Developer Tools* section. Ran some testing and nothing worked... Or so I thought. I should have check my notifications
section of my iPhone because I found out later they came in after restarting Home Assistant. But, nope.. I decided to remove the above code and try using the *Automation* section to make a rule, condition, action, ... which
did not work out. The fields could use some default values so I know what format to input. Ohwell... going back to my iPhone I noticed a ton of notifications that took place many minutes ago! So the above code works, but
could use some definite tweaking. But that about does it for now, I think this is a good spot to stop and if I made more discoveries, will make a new update.

## Summary

The updates I get from these sensors is really fast! Quality of the sensor plastic shroud is pretty bad, but I really like how this all turned out and for a pretty cheap price.
Other things I want to get done are inserting annotations into Grafana for plotting on a graph. No idea if thats even possible but I think an *Automation* is probably in store for
a future post in the near future...oh would you look at that.. Grafana has an [api for annotations](https://grafana.com/docs/grafana/latest/http_api/annotations/).. so yah, seems
pretty possible!
