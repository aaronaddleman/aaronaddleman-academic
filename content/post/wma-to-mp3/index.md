---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Using Os X to Convert Wma to Mp3 for Free"
subtitle: "Change a WMA file to MP3 on your Mac with full opensource software"
summary: "Using VLC to convert WMA files to MP3"
authors: []
tags: []
categories: []
date: 2020-07-28T12:55:26-08:00
lastmod: 2020-07-28T12:55:26-08:00
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
aliases:
    - /articles/using-osx-to-convert-wma-to-mp3-for-free
---

I rarely need to convert files on my Mac, but when I do, I seem to think I have to find some type of weird audio program to help. My usual pattern to solve this problem was to go onto google.com and put in "convert wma to mp3" and hope for the best. But tonight was different. While playing around with the program VLC, I noticed a menu item that I have never used before: "Streaming/Exporting Wizard". This option allows for doing just as it suggests, but after playing around with some options, I found out that VLC can convert WMA files to MP3 files!

## Here are the steps

1. Open the WMA file(s) in VLC
1. Goto File -&gt; Streaming/Export Wizard
1. Choose "Transcode/Save to file" and click Next
1. Choose "Existing playlist item" and highlight the items you want converted and click Next
1. Because I was converting audio, I used the "Transcode audio" option
1. Set the codec to "MP3" and choose your bitrate (I went with default of 192) and click Next
1. Set your encapsulation to "RAW" and click Next
1. Set your destination directory and click Next and it should start converting!

## Update - Dec 12, 2013

Here are some screen shots of the steps I took and I also noticed that the converted file did not appear until I played the song. Good Luck !!

### Step 1
![vlc os x convert wma to mp3 step 1](/media/vlc_step1.png "vlc os x convert wma to mp3 step 1")

### Step 2
![vlc os x convert wma to mp3 step 2](/media/vlc_step2.png "vlc os x convert wma to mp3 step 2")

### Step 3
![vlc os x convert wma to mp3 step 3](/media/vlc_step3.png "vlc os x convert wma to mp3 step 3")

### Step 4
![vlc os x convert wma to mp3 step 4](/media/vlc_step4.png "vlc os x convert wma to mp3 step 4")

### Step 5
![vlc os x convert wma to mp3 step 5](/media/vlc_step5.png "vlc os x convert wma to mp3 step 5")

### Step 6
![vlc os x convert wma to mp3 step 6](/media/vlc_step6.png "vlc os x convert wma to mp3 step 6")

### Step 7
![vlc os x convert wma to mp3 step 7](/media/vlc_step7.png "vlc os x convert wma to mp3 step 7")

### Step 8
![vlc os x convert wma to mp3 step 8](/media/vlc_step8.png "vlc os x convert wma to mp3 step 8")

### Step 9
![vlc os x convert wma to mp3 step 9](/media/vlc_step9.png "vlc os x convert wma to mp3 step 9")


## Using Automator to rename

Afterwards I used Automator to rename my files from "Song Title.wma.raw" to "Song Title.mp3" by:

* Dragging the audio files onto Automator
* Adding "Rename Finder Items"
* Set the operation of the "Rename Finder Items" to "Replace Text"
* Find = .wma.raw
* Replace = .mp3
* Click Run!
