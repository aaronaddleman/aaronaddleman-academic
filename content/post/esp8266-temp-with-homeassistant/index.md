---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Esp8266 Tempurature With Home Assistant"
subtitle: "Setting up Adafruit's Feather Huzzah esp8266 with tempurature sensor and Home Assistant with MQTT broker"
summary: "Logging and other signals with the Feather Huzzah which has the esp8266 and Home Assistant can bring more information for your metrics and signals. Follow along my insturctions for getting a tempurature sensor recording values."
authors: []
tags: ['homeassistant','sbc','graphs','howto']
categories: []
date: 2021-03-10T09:23:51-08:00
lastmod: 2021-03-10T09:23:51-08:00
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

1. wiring diagram

```plantuml
```

1. install esphomeflasher:
   - https://github.com/esphome/esphome-flasher
   - `pipenv install esphomeflasher`
1. connect a cable between the feather huzzah esp8266 and the mac/linux host
1. test if the port exists:
   - `ls -al /dev | grep usb`
   - if the port does not show up, unplug the port from the mac side, and plug it back in
   - do not use the side that is the feather huzzah as the mac will not sense the change in voltage to refresh the ports
1. download the .bin file from Home Assistant:
   - Goto Home Assistant
   - Select ESPHome
   - Create/Select the config
   - Compile the config
   - After compiling, there should be an option to *Download* bin file
   - The file's name will be the name of the sensor
   - Use this file in the next step
1. push the .bin to the feather huzzah:
   - `esphomeflasher --esp8266 ~/Downloads/test.bin`
1. show logs of the feather huzzah:
   - `esphomeflasher --esp8266 --show-logs ~/Downloads/test.bin`

1. deep sleep testing
   - https://esphome.io/components/deep_sleep.html

```yaml
esphome:
  name: garage_board
  platform: ESP8266
  board: huzzah

wifi:
  ssid: !secret wifi_name
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Garage Board Fallback Hotspot"
    password: "pLfso2f2APHu"

captive_portal:

# Enable logging
logger:

# Enable Home Assistant API
api:
  password: !secret ota_password

ota:
  password: !secret ota_password

mqtt:
  broker: !secret mqtt_broker_ip
  username: !secret mqtt_user
  password: !sevret mqtt_password
  topic_prefix: 'garage_board/feeds'
  birth_message:
  will_message:
  log_topic:

dallas:
  - pin: 4
    update_interval: 60s

sensor:
  - platform: dallas
    # Find this value by running your device with this sensor node commented out
    # It will show a Dallas Address in the logs
    address: 0x84011453D285AA28
    name: "Garage Freezer"
    filters:
    - lambda: return x * (9.0/5.0) + 32.0;
    unit_of_measurement: "°F"
  - platform: dallas
    # Find this value by running your device with this sensor node commented out
    # It will show a Dallas Address in the logs
    address: 0x5F0114541364AA28
    name: "Garage Fridge"
    filters:
    - lambda: return x * (9.0/5.0) + 32.0;
    unit_of_measurement: "°F"
  - platform: dallas
    # Find this value by running your device with this sensor node commented out
    # It will show a Dallas Address in the logs
    address: 0xD30114542BFBAA28
    name: "Garage Room"
    filters:
    - lambda: return x * (9.0/5.0) + 32.0;
    unit_of_measurement: "°F"
binary_sensor:
  - platform: gpio
    name: "USB Power"
    pin:
      number: 12
```
