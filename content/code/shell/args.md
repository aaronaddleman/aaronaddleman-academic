---
title: Args
linktitle: Args
toc: true
type: docs
tags: []
date: "2020-11-29T07:28:00Z"
draft: false
menu:
  Shell:
    parent: Shell
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 2
---

My basic template of parsing aruments passed to a shell script. I wrote this super long ago, and felt I could make use of it to this day. Other options for arguments are using environment variables instead, but this worked just as well.

```bash
#!/usr/bin/env bash
# created at: Wed Apr 04 10:03:41 PDT 2009
# updated at: Wed Apr 22 15:33:24 PDT 2009
# author: aaron addleman

# manage subversion with swatch and ftp log file. all actions will be sent to a file for throttling purposes to allow SVN to handle its own lock files
#
# BEGIN SCRIPT

usage() {
  cat << EOF
  usage: $0 options
  This script takes commands from a swatch and converts to svn commands for a directory under version control.
    OPTIONS:
  -h      Show this message
  -a      Action needed (STOR, DELE, MKD, ENTRIES, SVNUPDATE)
  -u      Username to use for commits
  -f      File or directory being affected
  -m      message to use
  -x      Execute SVN commands from the $SVNACTIONS file
  (when this option is used, all others are ignored)
  -v      Verbose (boolean)
  -t      Test (dont run any commands, but print them to the command line)
EOF
}

ACTION=
USER=
FILE=
MESSAGE=
VERBOSE=
TEST=

while getopts "h a:u:f{?:}:m:x:v:t" OPTION
do
  case $OPTION in
    h)
      usage
      exit 1
    ;;
    a)
      ACTION=$OPTARG
    ;;
    u)
      USER=$OPTARG
    ;;
    f)
      FILE=$OPTARG
    ;;
    m)
      MESSAGE=$OPTARG
    ;;
    v)
      VERBOSE=1
    ;;
    t)
      TEST=1
    ;;
    ?)
      usage
      exit
    ;;
  esac
done
```