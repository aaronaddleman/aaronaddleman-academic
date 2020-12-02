---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Rpi Nas With Omv"
subtitle: ""
summary: ""
authors: []
tags: ['sbc']
categories: []
date: 2020-11-30T08:40:45-08:00
lastmod: 2020-11-30T08:40:45-08:00
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

Making a NAS has been an item on my todo list for a very long time. I decided to get this done for my Kubernetes cluster
in order to buffer the resources required during a deployment. Additonaly, caching files pulled from the Internet would also be of some help or holding some builds of custom images.

## the hardware

I purchased the [Quad Sata Kit for Raspberry Pi 4](https://shop.allnetchina.cn/products/quad-sata-hat-case-for-raspberry-pi-4) and 4 [SanDisk SSD Plus 1TB Internal SSD](https://www.amazon.com/dp/B07D998212/ref=cm_sw_em_r_mt_dp_vbBXFbNSJAJ2P?_encoding=UTF8&psc=1)

Since I already own a [micro HDMI to HDMI cable](https://www.amazon.com/dp/B06WWQ7KLV/ref=cm_sw_em_r_mt_dp_QdBXFb2NER7XX?_encoding=UTF8&psc=1), I did not need one. The kit also came with a power supply which will send power to both the SSDs and the Rasperry Pi.

## the OS

~~I went with the Ubuntu Desktop 20.10 64Bit. Would have made more sense to go with the server version, but ohwell.~~ Turns out the steps below are not compatible with Ubuntu Desktop. You might have some luck with the server version
of Ubuntu. Anyways, please do not make the decision I made and instead use Raspian OS (or the Ubuntu Server if your feeling adventurous).

## Enable the Hat

Along with my setup is the [RockPi Quad SATA Hat](https://wiki.radxa.com/News/2019/12/introduce-rockpi-sata-hat) allowing me to add up to 4 SSD devices to be attached to the Raspberry Pi.

To enable the use of all 4 SSDs, I have to install software to allow the board to be recognized along with the display board located on the top of the unit:


```bash
curl -sL https://rock.sh/get-rockpi-sata-hat | sudo -E bash -
```

## OpenMediaVault

Through some reading, I found the following command to be the recomenned method for installing OMV:

{{% callout warning %}}
This command will take a long time to run. Set aside about 30 minutes or so.
{{% /callout %}}

```bash
wget -O - https://raw.githubusercontent.com/OpenMediaVault-Plugin-Developers/installScript/master/install | sudo bash
```

## Adding volumes

1. run `fdisk /dev/sda`
   1. create new partition: `n`
   2. take defaults for rest (or for advanced users, do what you want...)
   3. write the changes with `w`
2. format the partition: `mkfs.ext4 /dev/sda1`
3. repeate for any additional disks or parititons
4. navigate to `file systems`
5. mount the filesystems and save the updated configuration each time
6. navigate to `shared folder`
7. create a new shared folder for your purposes
8. navigte to `NFS`
9. create a new share folder
   1. set the CIDR allow list to your network (mine was 192.168.86.0/24 for all host of my network[^1])

## Issues

1. You cannot remove or install the SSD with the cover housing installed. If you mess up your OS, you have to remove the metal case around the tower unit, find a tool to carefully wedge the SD card out from the Raspberry Pi port, do your recovery/business, then put it all back together. Horrible design.
2. In order to remove the metal case around the tower, you have to unplug the USB bridge which disconnects the drives from the Raspberry Pi.
3. The top fan is loud
4. I assuemd all of the drives could act as one, but I am wrong.

## conclusion

I think the OpenMediaVault does a very simple job at manageing NFS shares and users. This will serve my needs for now
and with the Portainer.io app, I can see some more things being enabled later on.

[^1]: I suggest installing a ip mask calculator. At the time of this writting I like `ipcalc`.
