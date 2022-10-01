---
title: "Spacemacs"
linktitle: "Spacemacs"
date: 2021-07-24T22:48:40-07:00
type: book
summary: "Combination of Emacs and Vim. I have been using it for at least a couple of years and its helpful most of the time. Read about how I have configured Spacemacs and why I still use it almost daily."
---

## What is it

Long ago in a galaxy far...actually, just long ago... people used to (and still do) compare Vim and Emacs for which is the best.
Spacemacs says: Why not have both?

An framework on top of Emacs that allows you to choose between different methods or styles of using the keyboard that are either Vim, Emacs, or a hybrid of
both. By using a file named `.spacemacs` and the project cloned out to `~/.emacs.d` you can launch Emacs and move into a code editor house that:

1. is updated by git
1. large community backing
1. totally free
1. has many plugins + Melpa repository
1. extensible by writing Lisp

## Why I use it

1. Mega nerd status
1. All keyboard driven
1. Fast

Okay, I will say the first reason is pretty much not a reason at all. But there are a long list of reasons I do like Spacemacs:

### Pros

1. Magit is amazing for making commits and very fast to make Git changes
1. iEdit is the most powerful multi-editor I have seen so far
1. Keeping my hands on the keyboard and off the mouse
1. SPC jj - Jump to any character(s) that is on the screen
1. Amazing at updating MarkDown tables
1. Almost same experience in non-gui mode over ssh
1. Most Vim commands can be used
1. iBuffer is from another world of amazing features like nothing else
1. Tons of language support from the Emacs world

### Cons

1. Renaming a file is not easy
1. Most of the shells are horrible. Only `vterm` is worth using
1. Not everyones cup of tea
1. Hard to be consistant with cancel commands. Is it `Esc` or `Ctrl-g`?
1. Save and load of workspace not reliable

## How I learned

Honestly, every time I would try Spacemacs, I would give up quickly and go back to Sublime because I knew how to do the translation of the
content much easier. But there comes a time with me that I want to risk the amount of time it would take me to learn the new thing(s) so
that I can grow and understand how to do something else.

Each new feature for learning on Spacemacs kept growing after I got a couple of the basics down so that I _never_ went back to Sublime
or a different editor. As I repteated this pattern I started to get better.

> Limit the time to learn a new medium/advanced feature to a very short amount of time. I used 10 minutes maximum.

The definition for medium or advanced is based on the current level of where you are at with the feature. I like to use a scale of
0 to 4:

| Level | Description                                                                           |
|   :-- | :--                                                                                   |
|     0 | Never heard of this. I must google it.                                                |
|     1 | I am familiure but need to read and use google almost all the time to get things done |
|     2 | Use google much less than level 1, but still use it to remind me of how to do things  |
|     3 | Almost never use google at all                                                        |
|     4 | I feel comfortable teaching what I have learned to others                             |

I also use the `evil` setting which represents the words: **E**macs **VI** **L**ayer

This allows for me to use almost all of the Vim based characters/commands/modes associated with Vim


## Things not in Evil

There are some things that are not included in the `evil` mode which are of the following. There are way more than what I have listed
here, but this is what I recall getting me by:

| Command       | Description                   |
| :--           | :--                           |
| Ctrl - g      | Cancels most actions or menus |
| Ctrl - v OR b | Moves up or down content      |

## Unique to Spacemacs

Here is a list of features that I appreciate so much inside Spacemacs:

| Command         | Description                                                                                                                                                                |
| :--             | :--                                                                                                                                                                        |
| MarkDown Tables | Ability to edit tables really easy inside markdown. Things just auto align.                                                                                                |
| iEdit           | I have only skimmed the surface of this one, but you can edit multiple things in the whole file or just within a function                                                  |
| iBuffer         | Manage the files you have open with tons of searching or selecting (eg save all files of a project, close all `*.json` files)                                              |
| Windows State   | Move/Select/Shrink/Grow/Rotate all windows with only the keyboard and then hit q when you are done                                                                         |
| SPC j j         | This turns everything grey and waits for any string of chars, then lets you jump to the patern displayed on the screen                                                     |
| magit           | (From Melpa) lets you commit to Git really really fast                                                                                                                     |
| SPC - [0-9]     | Select a window from 0 to 9 making navigation really fast                                                                                                                  |
| VTerm           | (not really unique) Show a really advanced shell for Emacs to issue shell commands but also switch to view mode for selecting text allowing to select text for documenting |

## More detail...

This is just a summary of what I enjoy about Spacemacs. To see a full article about it all, head on over to my [code page about Spacemacs](/code/spacemacs)
