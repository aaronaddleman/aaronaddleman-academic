---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Elixir"
linktitle: "Elixir"
summary:
date: 2021-04-13T00:12:55-07:00
lastmod: 2021-04-13T00:12:55-07:00
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - Substitute `example` with the name of your course/documentation folder.
# - name: Declare this menu item as a parent with ID `name`.
# - parent: Reference a parent ID if this page is a child.
# - weight: Position of link in menu.
menu:
  example:
    name: YourParentID
    # parent: YourParentID
    weight: 1
---

Commands used to:

1. install elixir
1. install IElixr

``` shell
12  wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && sudo dpkg -i erlang-solutions_2.0_all.deb
13  sudo apt install gnupg2
14  wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && sudo dpkg -i erlang-solutions_2.0_all.deb
15  sudo apt update
16  sudo apt install esl-erlang
17  erl
18  elixer -v
19  elixir -v
20  erl -v
21  sudo apt install elixir
22  elixir -v
23  cd work
24  ls
25  mix new hello
26  cd hello
27  mix help
28* iex -S mix
29* ls
30* cd hello
31* iex -S mix
32* cd ..
33* git clone https://github.com/pprzetacznik/IElixir.git
34* cd IElixir
35* mix deps.get
36* mix test
37* apt-get install libzmq3-dev
38* sudo apt-get install libzmq3-dev
39* apt-get install libzmq3-dev
40* mix test
41* sudo apt install build-essential
42* mix test
43* MIX_ENV=prod mix compile
44* ./install_script.sh
45* jupyter console --kernel ielixir
46  jupyter kernelspec list
47  ls -al
48  cat mix.exs
```
