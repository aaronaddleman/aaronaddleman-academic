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
    name: Elixir
    # parent: YourParentID
    weight: 1
---

Built on top of Erlang and taking some inspiration from Ruby, Elixir, while still relativly new is a very fast language with great functional programming and concurancy support.

## Installing

### Elixir

I high suggest following the [official docs of installing Elixir](https://elixir-lang.org/install.html) instead of what I have documented here. Below are my instructions I used for my Ubuntu docker image which also somes with some extra fluff on top being the JupyterLabs and VSCode server (that and also trying `brew install elixir` failed for me).

``` shell
sudo apt install gnupg2
wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && sudo dpkg -i erlang-solutions_2.0_all.deb
sudo apt update
sudo apt install esl-erlang
sudo apt install elixir
elixir -v
rm erlang-solutions_2.0_all.deb
```

### IElixir

This is for the Jupyter Kernel. In the end, I had to list the installed kernels to ensure the install worked ok. After that, it was a matter of just doing a web-refresh of JupyterLabs and I was rock'n with Elixir kernel. Very easy experience.

```shell
git clone https://github.com/pprzetacznik/IElixir.git
cd IElixir
mix deps.get
sudo apt-get install libzmq3-dev
sudo apt-get install libzmq3-dev
sudo apt install build-essential
mix test
MIX_ENV=prod mix compile
./install_script.sh
jupyter console --kernel ielixir
jupyter kernelspec list
```
