---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Iterm2 and Tmux"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2016-10-03T08:55:25-08:00
lastmod: 2016-10-03T08:55:25-08:00
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
    - /articles/tmux-keyboard-and-iterm2/
---

I really like tmux for all its cool tricks and performance. As time has passed, I decided to contribute little bits of time to making iterm2 and tmux work nice together. After making some small adjustments to the tmux config, I came up with the a configuration in iterm that would help me use the keyboard for hopping around.

## My settings of iterm2 and tmux

After starting tmux, lets name the session:

ctrl + b ,

and type in the name of this session. Usually I go for a name of the project I am working on, so lets go with "blog". Next, lets split up the window with:

ctrl + b %

this is easily memorized by the % making a slash down the verticle length of your screen. Now lets cut the window again using a different command to make a horizontal cut:

ctrl + b "

Now that we have some panes, its time to start resizing them. Using the profile below, you can resize them by doing:

ctrl + opt Left Arrow
ctrl + opt Right Arrow
ctrl + opt Up Arrow
ctrl + opt Down Arrow

To move between all of the panes, you can use the following:

ctrl + cmd Left Arrow
ctrl + cmd Right Arrow
ctrl + cmd Up Arrow
ctrl + cmd Down Arrow

Now lets create a new session by using the following key combination:

ctrl + b :

You should be greeted at the bottom with a input prompt asking for the name of the session. Lets call this "shell". Once your at the new session, move back and forth between sessions with:

opt + shift Up Arrow
opt + shift Down Arrow

While moving up and down between different sessions, creating new windows is also easy with the following:

ctrl + b c

and to move between the windows, is also very easy with the following combination:

opt + shift Left Arrow
opt + shift Right Arrow

## Iterm2 Profiles

Below is the configuration you need for making the iterm profiles. This will replace your default profile as well. Perhaps you can figure out how to separate them from the file below. Anyways place this file at the following location

```bash
~/Library/Application Support/iTerm2/DynamicProfiles/profile.json

Here is the contents of the file:

```json
{
"Profiles": [
{
  "Use Non-ASCII Font" : false,
  "Tags" : [

  ],
  "Ansi 12 Color" : {
    "Green Component" : 0.807843137254902,
    "Blue Component" : 0.9411764705882353,
    "Red Component" : 0.6235294117647059
  },
  "Ansi 7 Color" : {
    "Green Component" : 1,
    "Blue Component" : 1,
    "Red Component" : 1
  },
  "Ansi 8 Color" : {
    "Green Component" : 0.196078431372549,
    "Blue Component" : 0.196078431372549,
    "Red Component" : 0.196078431372549
  },
  "Bold Color" : {
    "Green Component" : 0.8823529411764706,
    "Blue Component" : 0.8627450980392157,
    "Red Component" : 0.9019607843137255
  },
  "Ansi 9 Color" : {
    "Green Component" : 0.4823529411764706,
    "Blue Component" : 0.4196078431372549,
    "Red Component" : 1
  },
  "Ansi 4 Color" : {
    "Green Component" : 0.611764705882353,
    "Blue Component" : 0.7450980392156863,
    "Red Component" : 0.4274509803921568
  },
  "Ansi 0 Color" : {
    "Green Component" : 0,
    "Blue Component" : 0,
    "Red Component" : 0
  },
  "Rows" : 25,
  "Default Bookmark" : "No",
  "Cursor Guide Color" : {
    "Red Component" : 0.65,
    "Color Space" : "Calibrated",
    "Blue Component" : 1,
    "Alpha Component" : 0.25,
    "Green Component" : 0.91
  },
  "Non-ASCII Anti Aliased" : true,
  "Use Bright Bold" : true,
  "Ansi 10 Color" : {
    "Green Component" : 0.8196078431372549,
    "Blue Component" : 0.5098039215686274,
    "Red Component" : 0.5137254901960784
  },
  "Use Cursor Guide" : false,
  "Ambiguous Double Width" : false,
  "Jobs to Ignore" : [
    "rlogin",
    "ssh",
    "slogin",
    "telnet"
  ],
  "Ansi 15 Color" : {
    "Green Component" : 1,
    "Blue Component" : 1,
    "Red Component" : 1
  },
  "Foreground Color" : {
    "Green Component" : 0.8823529411764706,
    "Blue Component" : 0.8627450980392157,
    "Red Component" : 0.9019607843137255
  },
  "Bound Hosts" : [

  ],
  "Working Directory" : "\/Users\/addlema",
  "Blinking Cursor" : false,
  "Disable Window Resizing" : true,
  "Sync Title" : false,
  "Prompt Before Closing 2" : false,
  "BM Growl" : true,
  "Command" : "",
  "Description" : "Default",
  "Smart Cursor Color" : false,
  "Mouse Reporting" : true,
  "Screen" : -1,
  "Selection Color" : {
    "Green Component" : 0.392156862745098,
    "Blue Component" : 0.4941176470588236,
    "Red Component" : 0.3529411764705883
  },
  "Columns" : 80,
  "Idle Code" : 0,
  "Ansi 13 Color" : {
    "Green Component" : 1,
    "Blue Component" : 1,
    "Red Component" : 1
  },
  "Custom Command" : "No",
  "ASCII Anti Aliased" : true,
  "Non Ascii Font" : "Monaco 12",
  "Vertical Spacing" : 1,
  "Use Bold Font" : true,
  "Option Key Sends" : 0,
  "Selected Text Color" : {
    "Green Component" : 0.8823529411764706,
    "Blue Component" : 0.8627450980392157,
    "Red Component" : 0.9019607843137255
  },
  "Background Color" : {
    "Green Component" : 0.1686274509803922,
    "Blue Component" : 0.1686274509803922,
    "Red Component" : 0.1686274509803922
  },
  "Character Encoding" : 4,
  "Ansi 11 Color" : {
    "Green Component" : 1,
    "Blue Component" : 0.4862745098039216,
    "Red Component" : 1
  },
  "Use Italic Font" : true,
  "Unlimited Scrollback" : false,
  "Keyboard Map" : {
    "0xf700-0x260000" : {
      "Action" : 10,
      "Text" : "[1;6A"
    },
    "0x37-0x40000" : {
      "Action" : 11,
      "Text" : "0x1f"
    },
    "0x32-0x40000" : {
      "Action" : 11,
      "Text" : "0x00"
    },
    "0xf709-0x20000" : {
      "Action" : 10,
      "Text" : "[17;2~"
    },
    "0xf70c-0x20000" : {
      "Action" : 10,
      "Text" : "[20;2~"
    },
    "0xf729-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2H"
    },
    "0xf72b-0x40000" : {
      "Action" : 10,
      "Text" : "[1;5F"
    },
    "0xf705-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2Q"
    },
    "0xf703-0x260000" : {
      "Action" : 10,
      "Text" : "[1;6C"
    },
    "0xf700-0x220000" : {
      "Action" : 10,
      "Text" : "[1;2A"
    },
    "0xf701-0x280000" : {
      "Action" : 11,
      "Text" : "0x1b 0x1b 0x5b 0x42"
    },
    "0x38-0x40000" : {
      "Action" : 11,
      "Text" : "0x7f"
    },
    "0x33-0x40000" : {
      "Action" : 11,
      "Text" : "0x1b"
    },
    "0xf703-0x220000" : {
      "Action" : 10,
      "Text" : "[1;2C"
    },
    "0xf701-0x240000" : {
      "Action" : 10,
      "Text" : "[1;5B"
    },
    "0xf70d-0x20000" : {
      "Action" : 10,
      "Text" : "[21;2~"
    },
    "0xf702-0x260000" : {
      "Action" : 10,
      "Text" : "[1;6D"
    },
    "0xf729-0x40000" : {
      "Action" : 10,
      "Text" : "[1;5H"
    },
    "0xf706-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2R"
    },
    "0x34-0x40000" : {
      "Action" : 11,
      "Text" : "0x1c"
    },
    "0xf700-0x280000" : {
      "Action" : 11,
      "Text" : "0x1b 0x1b 0x5b 0x41"
    },
    "0x2d-0x40000" : {
      "Action" : 11,
      "Text" : "0x1f"
    },
    "0xf70e-0x20000" : {
      "Action" : 10,
      "Text" : "[23;2~"
    },
    "0xf702-0x220000" : {
      "Action" : 10,
      "Text" : "[1;2D"
    },
    "0xf703-0x280000" : {
      "Action" : 11,
      "Text" : "0x1b 0x1b 0x5b 0x43"
    },
    "0xf700-0x240000" : {
      "Action" : 10,
      "Text" : "[1;5A"
    },
    "0xf707-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2S"
    },
    "0xf70a-0x20000" : {
      "Action" : 10,
      "Text" : "[18;2~"
    },
    "0x35-0x40000" : {
      "Action" : 11,
      "Text" : "0x1d"
    },
    "0xf70f-0x20000" : {
      "Action" : 10,
      "Text" : "[24;2~"
    },
    "0xf703-0x240000" : {
      "Action" : 10,
      "Text" : "[1;5C"
    },
    "0xf701-0x260000" : {
      "Action" : 10,
      "Text" : "[1;6B"
    },
    "0xf702-0x280000" : {
      "Action" : 11,
      "Text" : "0x1b 0x1b 0x5b 0x44"
    },
    "0xf72b-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2F"
    },
    "0x36-0x40000" : {
      "Action" : 11,
      "Text" : "0x1e"
    },
    "0xf708-0x20000" : {
      "Action" : 10,
      "Text" : "[15;2~"
    },
    "0xf701-0x220000" : {
      "Action" : 10,
      "Text" : "[1;2B"
    },
    "0xf70b-0x20000" : {
      "Action" : 10,
      "Text" : "[19;2~"
    },
    "0xf702-0x240000" : {
      "Action" : 10,
      "Text" : "[1;5D"
    },
    "0xf704-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2P"
    }
  },
  "Window Type" : 0,
  "Cursor Boost" : 0.1903085443037975,
  "Background Image Location" : "",
  "Blur" : false,
  "Badge Color" : {
    "Red Component" : 1,
    "Color Space" : "Calibrated",
    "Blue Component" : 0,
    "Alpha Component" : 0.5,
    "Green Component" : 0
  },
  "Scrollback Lines" : 1000,
  "Send Code When Idle" : false,
  "Close Sessions On End" : true,
  "Terminal Type" : "xterm-256color",
  "Visual Bell" : true,
  "Flashing Bell" : false,
  "Silence Bell" : false,
  "Ansi 14 Color" : {
    "Green Component" : 0.807843137254902,
    "Blue Component" : 0.9411764705882353,
    "Red Component" : 0.6274509803921569
  },
  "Name" : "Default",
  "Cursor Text Color" : {
    "Green Component" : 0.8823529411764706,
    "Blue Component" : 0.8627450980392157,
    "Red Component" : 0.9019607843137255
  },
  "Minimum Contrast" : 0,
  "Shortcut" : "",
  "Cursor Color" : {
    "Green Component" : 1,
    "Blue Component" : 1,
    "Red Component" : 1
  },
  "Transparency" : 0,
  "Ansi 1 Color" : {
    "Green Component" : 0.2862745098039216,
    "Blue Component" : 0.2235294117647059,
    "Red Component" : 0.8549019607843137
  },
  "Horizontal Spacing" : 1,
  "Ansi 3 Color" : {
    "Green Component" : 0.8235294117647058,
    "Blue Component" : 0.2901960784313726,
    "Red Component" : 1
  },
  "Custom Directory" : "No",
  "Ansi 5 Color" : {
    "Green Component" : 0.8156862745098039,
    "Blue Component" : 1,
    "Red Component" : 0.8156862745098039
  },
  "Ansi 6 Color" : {
    "Green Component" : 0.611764705882353,
    "Blue Component" : 0.7450980392156863,
    "Red Component" : 0.4313725490196079
  },
  "Guid" : "3BD5D8D8-BE4F-45F0-AAC8-153C653F3AD5",
  "Normal Font" : "Menlo-Regular 13",
  "Ansi 2 Color" : {
    "Green Component" : 0.6235294117647059,
    "Blue Component" : 0.3137254901960784,
    "Red Component" : 0.3176470588235294
  },
  "Link Color" : {
    "Red Component" : 0.023,
    "Color Space" : "Calibrated",
    "Blue Component" : 0.678,
    "Alpha Component" : 1,
    "Green Component" : 0.27
  },
  "Right Option Key Sends" : 0
},
{
  "Ansi 7 Color" : {
    "Green Component" : 0.8900123834609985,
    "Blue Component" : 0.7978110313415527,
    "Red Component" : 0.916110634803772
  },
  "Tags" : [

  ],
  "Ansi 12 Color" : {
    "Green Component" : 0.5096293091773987,
    "Blue Component" : 0.5168579816818237,
    "Red Component" : 0.4405802488327026
  },
  "AWDS Tab Directory" : "",
  "Horizontal Spacing" : 1,
  "Bold Color" : {
    "Green Component" : 0.5648583769798279,
    "Blue Component" : 0.5636365413665771,
    "Red Component" : 0.5059919357299805
  },
  "Ansi 6 Color" : {
    "Green Component" : 0.570823609828949,
    "Blue Component" : 0.5250227451324463,
    "Red Component" : 0.1467953473329544
  },
  "Transparency" : 0,
  "Custom Directory" : "No",
  "Rows" : 25,
  "Default Bookmark" : "No",
  "Ansi 5 Color" : {
    "Green Component" : 0.1080246344208717,
    "Blue Component" : 0.4351663589477539,
    "Red Component" : 0.7773894071578979
  },
  "AWDS Tab Option" : "No",
  "Cursor Guide Color" : {
    "Red Component" : 0.65,
    "Color Space" : "Calibrated",
    "Blue Component" : 1,
    "Alpha Component" : 0.25,
    "Green Component" : 0.91
  },
  "Non-ASCII Anti Aliased" : true,
  "Use Bright Bold" : true,
  "Use Cursor Guide" : false,
  "Ansi 10 Color" : {
    "Green Component" : 0.3566595613956451,
    "Blue Component" : 0.3829848766326904,
    "Red Component" : 0.2767199277877808
  },
  "Ambiguous Double Width" : false,
  "Jobs to Ignore" : [
    "rlogin",
    "ssh",
    "slogin",
    "telnet"
  ],
  "AWDS Pane Option" : "No",
  "Ansi 15 Color" : {
    "Green Component" : 0.9579439163208008,
    "Blue Component" : 0.8640598058700562,
    "Red Component" : 0.9894341826438904
  },
  "Working Directory" : "\/Users\/addlema",
  "Foreground Color" : {
    "Green Component" : 0.5096293091773987,
    "Blue Component" : 0.5168579816818237,
    "Red Component" : 0.4405802488327026
  },
  "Bound Hosts" : [

  ],
  "Blinking Cursor" : false,
  "Disable Window Resizing" : true,
  "Prompt Before Closing 2" : false,
  "Sync Title" : false,
  "Description" : "Default",
  "Mouse Reporting" : true,
  "BM Growl" : true,
  "Smart Cursor Color" : false,
  "AWDS Pane Directory" : "",
  "Selection Color" : {
    "Red Component" : 0.9333333333333333,
    "Color Space" : "Calibrated",
    "Blue Component" : 0.8392156862745098,
    "Alpha Component" : 1,
    "Green Component" : 0.9098039215686274
  },
  "Command" : "",
  "Screen" : -1,
  "AWDS Window Directory" : "",
  "Idle Code" : 0,
  "AWDS Window Option" : "No",
  "Columns" : 80,
  "Ansi 13 Color" : {
    "Green Component" : 0.3389629721641541,
    "Blue Component" : 0.7290843725204468,
    "Red Component" : 0.3479863405227661
  },
  "Custom Command" : "No",
  "ASCII Anti Aliased" : true,
  "Background Color" : {
    "Green Component" : 0.1178361028432846,
    "Blue Component" : 0.1517027318477631,
    "Red Component" : 0
  },
  "Vertical Spacing" : 1,
  "Use Bold Font" : true,
  "Option Key Sends" : 0,
  "Selected Text Color" : {
    "Green Component" : 0.5648583769798279,
    "Blue Component" : 0.5636365413665771,
    "Red Component" : 0.5059919357299805
  },
  "Non Ascii Font" : "Monaco 12",
  "Character Encoding" : 4,
  "Ansi 11 Color" : {
    "Green Component" : 0.4071767330169678,
    "Blue Component" : 0.4385056495666504,
    "Red Component" : 0.3243661820888519
  },
  "Use Italic Font" : true,
  "Unlimited Scrollback" : false,
  "Cursor Boost" : 0,
  "Keyboard Map" : {
    "0xf700-0x260000" : {
      "Action" : 10,
      "Text" : "[1;6A"
    },
    "0x37-0x40000" : {
      "Action" : 11,
      "Text" : "0x1f"
    },
    "0x32-0x40000" : {
      "Action" : 11,
      "Text" : "0x00"
    },
    "0xf709-0x20000" : {
      "Action" : 10,
      "Text" : "[17;2~"
    },
    "0xf70c-0x20000" : {
      "Action" : 10,
      "Text" : "[20;2~"
    },
    "0xf729-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2H"
    },
    "0xf72b-0x40000" : {
      "Action" : 10,
      "Text" : "[1;5F"
    },
    "0xf705-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2Q"
    },
    "0xf703-0x260000" : {
      "Action" : 10,
      "Text" : "[1;6C"
    },
    "0xf700-0x220000" : {
      "Action" : 10,
      "Text" : "[1;2A"
    },
    "0xf701-0x280000" : {
      "Action" : 11,
      "Text" : "0x1b 0x1b 0x5b 0x42"
    },
    "0x38-0x40000" : {
      "Action" : 11,
      "Text" : "0x7f"
    },
    "0x33-0x40000" : {
      "Action" : 11,
      "Text" : "0x1b"
    },
    "0xf703-0x220000" : {
      "Action" : 10,
      "Text" : "[1;2C"
    },
    "0xf701-0x240000" : {
      "Action" : 10,
      "Text" : "[1;5B"
    },
    "0xf70d-0x20000" : {
      "Action" : 10,
      "Text" : "[21;2~"
    },
    "0xf702-0x260000" : {
      "Action" : 10,
      "Text" : "[1;6D"
    },
    "0xf729-0x40000" : {
      "Action" : 10,
      "Text" : "[1;5H"
    },
    "0xf706-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2R"
    },
    "0x34-0x40000" : {
      "Action" : 11,
      "Text" : "0x1c"
    },
    "0xf700-0x280000" : {
      "Action" : 11,
      "Text" : "0x1b 0x1b 0x5b 0x41"
    },
    "0x2d-0x40000" : {
      "Action" : 11,
      "Text" : "0x1f"
    },
    "0xf70e-0x20000" : {
      "Action" : 10,
      "Text" : "[23;2~"
    },
    "0xf702-0x220000" : {
      "Action" : 10,
      "Text" : "[1;2D"
    },
    "0xf703-0x280000" : {
      "Action" : 11,
      "Text" : "0x1b 0x1b 0x5b 0x43"
    },
    "0xf700-0x240000" : {
      "Action" : 10,
      "Text" : "[1;5A"
    },
    "0xf707-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2S"
    },
    "0xf70a-0x20000" : {
      "Action" : 10,
      "Text" : "[18;2~"
    },
    "0x35-0x40000" : {
      "Action" : 11,
      "Text" : "0x1d"
    },
    "0xf70f-0x20000" : {
      "Action" : 10,
      "Text" : "[24;2~"
    },
    "0xf703-0x240000" : {
      "Action" : 10,
      "Text" : "[1;5C"
    },
    "0xf701-0x260000" : {
      "Action" : 10,
      "Text" : "[1;6B"
    },
    "0xf702-0x280000" : {
      "Action" : 11,
      "Text" : "0x1b 0x1b 0x5b 0x44"
    },
    "0xf72b-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2F"
    },
    "0x36-0x40000" : {
      "Action" : 11,
      "Text" : "0x1e"
    },
    "0xf708-0x20000" : {
      "Action" : 10,
      "Text" : "[15;2~"
    },
    "0xf701-0x220000" : {
      "Action" : 10,
      "Text" : "[1;2B"
    },
    "0xf70b-0x20000" : {
      "Action" : 10,
      "Text" : "[19;2~"
    },
    "0xf702-0x240000" : {
      "Action" : 10,
      "Text" : "[1;5D"
    },
    "0xf704-0x20000" : {
      "Action" : 10,
      "Text" : "[1;2P"
    }
  },
  "Window Type" : 0,
  "Blur" : false,
  "Badge Color" : {
    "Red Component" : 1,
    "Color Space" : "Calibrated",
    "Blue Component" : 0,
    "Alpha Component" : 0.5,
    "Green Component" : 0
  },
  "Scrollback Lines" : 1000,
  "Send Code When Idle" : false,
  "Close Sessions On End" : true,
  "Terminal Type" : "xterm-256color",
  "Badge Text" : "",
  "Flashing Bell" : false,
  "Visual Bell" : true,
  "Silence Bell" : false,
  "Ansi 14 Color" : {
    "Green Component" : 0.5648583769798279,
    "Blue Component" : 0.5636365413665771,
    "Red Component" : 0.5059919357299805
  },
  "Cursor Text Color" : {
    "Green Component" : 0.155759260058403,
    "Blue Component" : 0.1937013864517212,
    "Red Component" : 0
  },
  "Name" : "Solarized-Tmux",
  "Minimum Contrast" : 0,
  "Shortcut" : "",
  "Cursor Color" : {
    "Green Component" : 0.5096293091773987,
    "Blue Component" : 0.5168579816818237,
    "Red Component" : 0.4405802488327026
  },
  "Ansi 0 Color" : {
    "Green Component" : 0.155759260058403,
    "Blue Component" : 0.1937013864517212,
    "Red Component" : 0
  },
  "Ansi 1 Color" : {
    "Green Component" : 0.1084065511822701,
    "Blue Component" : 0.1414571404457092,
    "Red Component" : 0.8192697763442993
  },
  "Ansi 2 Color" : {
    "Green Component" : 0.5411549210548401,
    "Blue Component" : 0.02020875550806522,
    "Red Component" : 0.4497745335102081
  },
  "Link Color" : {
    "Red Component" : 0.023,
    "Color Space" : "Calibrated",
    "Blue Component" : 0.678,
    "Alpha Component" : 1,
    "Green Component" : 0.27
  },
  "Ansi 4 Color" : {
    "Green Component" : 0.462659478187561,
    "Blue Component" : 0.7823141813278198,
    "Red Component" : 0.1275488436222076
  },
  "Right Option Key Sends" : 0,
  "Use Non-ASCII Font" : false,
  "Ansi 3 Color" : {
    "Green Component" : 0.4675142467021942,
    "Blue Component" : 0.02348481118679047,
    "Red Component" : 0.6474647521972656
  },
  "Guid" : "8AE8C1B9-FC3F-44D2-A6F8-943A8C4C5F4F",
  "Ansi 9 Color" : {
    "Green Component" : 0.2132530063390732,
    "Blue Component" : 0.07353043556213379,
    "Red Component" : 0.7417625784873962
  },
  "Ansi 8 Color" : {
    "Green Component" : 0.1178361028432846,
    "Blue Component" : 0.1517027318477631,
    "Red Component" : 0
  },
  "Normal Font" : "Menlo-Regular 13"
}
]
}
```