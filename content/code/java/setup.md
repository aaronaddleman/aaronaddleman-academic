---
title: setup
linktitle: setup
toc: true
type: docs
date: "2019-05-05T00:00:00Z"
draft: false
menu:
  java:
    parent: Java
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

Getting things stood up for Java was not the greatest experience for me
out-of-the-box when compared to other languages. JRE vs JDK for example:
Does JRE come with JDK? What version should I use? Can I use a later version
than the tutorial I am following?

## IDE

I chose the editor of VSCode. Feel like I have gotten pretty used to its workflow and Java, so far, is easy to setup.
Microsoft has done a good job of [getting VSCode configured for Java including installing Java](https://code.visualstudio.com/docs/languages/java)

You should definitly consider installing the bundled extension of
[VSCode-Java-Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
as it installs almost everything you need to write Java.

Another extension is the [Java IDE](https://marketplace.visualstudio.com/items?itemName=YouMayCallMeV.vscode-java-saber)
which helps generate setters and getters, along with aother things.

### creating files with VSCode

With all IDEs they have their special tricks for saving you time to write code. I see many shortcuts in the InteliJ IDE, and here
are some similar ways you can do code generation with the VSCode editor:

1. Creating a class/interface/enum/record
   1. select the folder
   2. click or run pallet command to create new file
   3. type the name and add `.java` to the end
   4. when the file is created, you are prompted to select the type of class/interface/enum/record
1. getters and setters
   1. install the [Java IDE](https://marketplace.visualstudio.com/items?itemName=YouMayCallMeV.vscode-java-saber)
   2. create a file and do your things
   3. right click inside the file's content
   4. choose "Generate Getters and Setters"
1. alt method of getters and setters
   1. there is a library called [lombok](https://projectlombok.org/features/GetterSetter) that will help set the getters and setters as well

### building with VSCode

When you have a `.java` file in view you can build the file by hitting `F5`. This should bring up a terminal window and build + run the `.java` file.