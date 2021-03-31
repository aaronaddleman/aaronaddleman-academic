---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Minecraft Modding"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-01-09T19:11:43-08:00
lastmod: 2021-01-09T19:11:43-08:00
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

## what are we doing

Well, my kids have asked me to try making them a Minecraft mod. So I said yes.
But I said that too fast and partly regret it. But, I am going to try and push
past the error messages and get to a working version. This is my story.

## runClient

I found some [instructions for how to get started modding Minecraft](https://codakid.com/guide-to-minecraft-modding-with-java/), but 
they were a little old. Not a big problem I thought to myself. So I started at the beginning and worked my way down the list:

1. install JDK 
2. install eclipse
3. setup Minecraft Forge
4. get a graphics editor (Pinta is suggested)
5. configure a project in eclipse
6. make a custom sword!

Currently I have not made it to step 6. Nope! Stuck right at step 5 with some nasty errors and a different
type of screenshots than the tutorial. I have done some googling and clicking around, then wandered off
the path so much that I realized writing it down would be helpful for me. So, here is what I have tried
to get the runClient working:

### run configurations settings

Opening the `run configuraiton settings` brings up the **Create, manage, and run configurations** dialog.
Expanding on the **Java Application** item on the left side listed the two items:

1. runClient
2. runServer

Highlighting the `runClient` allows for updating its settings. Selecting the `environment` tab is where
you will find the `MC_VERSION` and the instructions say to set this to `1.12`. 

You should now be able to hit `run` and be able to get the client up! Lets see what I get...

```
> Could not find net.minecraftforge:forge:1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12.
  Searched in the following locations:
    - https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12/forge-1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12.pom
    - https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12/forge-1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12.jar
    - file:/C:/Users/aaron/.gradle/caches/forge_gradle/bundeled_repo/net/minecraftforge/forge/1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12/forge-1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12.pom
    - file:/C:/Users/aaron/.gradle/caches/forge_gradle/bundeled_repo/net/minecraftforge/forge/1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12/forge-1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12.jar
    - https://libraries.minecraft.net/net/minecraftforge/forge/1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12/forge-1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12.jar
    - https://repo.maven.apache.org/maven2/net/minecraftforge/forge/1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12/forge-1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12.pom
    - https://repo.maven.apache.org/maven2/net/minecraftforge/forge/1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12/forge-1.12.2-14.23.5.2854_mapped_snapshot_20171003-1.12.jar
  Required by:
      project :
```

Seems it cannot find the file. Okay. What file should we be looking for? After some googling and not finding any listing
of available **forge** files, I found some instructions on updating the following file:

`./ForgePractice/build.gradle`

with the following settings (trimmed for web):

```gradle
buildscript {
    repositories {
        maven { url = 'https://files.minecraftforge.net/maven' }
        ...trimmed...
    }
}
...trimmed..
minecraft {
    // The mappings can be changed at any time, and must be in the following format.
    // snapshot_YYYYMMDD   Snapshot are built nightly.
    // stable_#            Stables are built at the discretion of the MCP team.
    // Use non-default mappings at your own risk. they may not always work.
    // Simply re-run your setup task after changing the mappings to update your workspace.
    mappings channel: 'snapshot', version: '20171003-1.12'
    ...trimnmed...
}

dependencies {
    // Specify the version of Minecraft to use, If this is any group other then 'net.minecraft' it is assumed
    // that the dep is a ForgeGradle 'patcher' dependency. And it's patches will be applied.
    // The userdev artifact is a special name and will get all sorts of transformations applied to it.
    minecraft 'net.minecraftforge:forge:1.12.2-14.23.5.2854'
	  // minecraft 'net.minecraftforge:forge:1.16.4-35.1.36'
    ...trimmed...
```

The above file will attempt to fetch the following files when running `runClient` task:

```
    - https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.16.4-35.1.4_mapped_stable_1/forge-1.16.4-35.1.4_mapped_stable_1.pom
    - https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.16.4-35.1.4_mapped_stable_1/forge-1.16.4-35.1.4_mapped_stable_1.jar
    - file:/C:/Users/aaron/.gradle/caches/forge_gradle/bundeled_repo/net/minecraftforge/forge/1.16.4-35.1.4_mapped_stable_1/forge-1.16.4-35.1.4_mapped_stable_1.pom
    - file:/C:/Users/aaron/.gradle/caches/forge_gradle/bundeled_repo/net/minecraftforge/forge/1.16.4-35.1.4_mapped_stable_1/forge-1.16.4-35.1.4_mapped_stable_1.jar
    - https://libraries.minecraft.net/net/minecraftforge/forge/1.16.4-35.1.4_mapped_stable_1/forge-1.16.4-35.1.4_mapped_stable_1.jar
    - https://repo.maven.apache.org/maven2/net/minecraftforge/forge/1.16.4-35.1.4_mapped_stable_1/forge-1.16.4-35.1.4_mapped_stable_1.pom
    - https://repo.maven.apache.org/maven2/net/minecraftforge/forge/1.16.4-35.1.4_mapped_stable_1/forge-1.16.4-35.1.4_mapped_stable_1.jar
```

So this was not helping me at all. I decided to back to the beginning and try the latest version. By downloading the following version and
installing the JDK version 14, I was able to launch the `runClient` with success:

1. [Minecraft Forge 1.16.4-35.1.4](https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.16.4.html)

I had to tell Eclipse about the different versions of JDK installed by doint the following:

1. Navigate to `Window -> Preferences`
2. Expand the left tree to `Java -> Installed JREs`
3. Use the `Search` button and select the path `c:\Program Files`

Let the search go through all the directories looking for the installed JDKs. Once done, you should be left with a list of JDKs to select as your editors default engine. I choose my `AdoptOpenJDK/jdk-14.0.2.12-hotspot`.

I was now able to run the following steps in the Gradle Tasks:

1. `genEclipseRuns`
2. `prepareRunClient`
3. `runClient`

Now, on to making a custom sword...

## custom sword