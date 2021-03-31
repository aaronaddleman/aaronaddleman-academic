---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Home Assistant Mqtt Installation"
subtitle: "MQTT Broker and the configuration file I used"
summary: "Installing of MQTT broker in Home Assistant and the configuration file I use(d). Not a really big deal."
authors: []
tags: ['homeassistant', 'howto']
categories: []
date: 2021-03-30T22:34:19-07:00
lastmod: 2021-03-30T22:34:19-07:00
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

## MQTT

Mosquitto Broker is an opensource project to help broker messeages between entites in Home Assistant. I am sure there is a much better explanation on the internet, but I am not filling this page on how to use Google. I am confident you can do that on your own.

## Install/Configure

1. I used the `supervisor` to install the MQTT broker project
1. Add the options configuration
1. Yah, you might want to use SSL unlike me...
1. Take note of the logins information. This is used later with other projects like ESPHome.

```yaml
logins:
  - username: espuser
    password: superSecretThingHere
anonymous: true
customize:
  active: false
  folder: mosquitto
certfile: fullchain.pem
keyfile: privkey.pem
require_certificate: false
```

Save and start the service!