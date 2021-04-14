---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Elixir"
linktitle: "Elixir notes and discoveries"
summary: "My summary and notes about Elixir as I grow with the language"
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

I highly suggest following the [official docs of installing Elixir](https://elixir-lang.org/install.html) instead of what I have documented here. Below are my instructions I used for my Ubuntu docker image which also somes with some extra fluff on top being the JupyterLabs and VSCode server (that and also trying `brew install elixir` failed for me).

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

## Errors

### Whats important

### Debugging process

## Interactive

Running a interactive REPL for Elixir (or any language is super helpful) and here you can use `iex -S mix` to get started when your at the root directory of a project. Once started, you should see a prompt that looks something like the following:

```elixir
➜ iex -S mix
Erlang/OTP 23 [erts-11.1.7] [source] [64-bit] [smp:3:3] [ds:3:3:10] [async-threads:1] [hipe]

Interactive Elixir (1.11.2) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

Getting help on a module is done using the `h` command followed by a modules name: `h Hello`

```elixir
iex(3)> h Hello

                                     Hello

Documentation for Hello.

iex(4)>
```
### Getting a value

When executing a module with a function which returns a value, you can get the value from that execution with the `v()` command:

```
iex(3)> Hello.hello
:world
iex(4)> v(3)
:world
```

Here I am using the module named `Hello` and executing the fuction called `hello` which returns back the result value of `:world`. By using the `v(3)` command to get the value of the 3rd execution step, I get the value of the command. After using this fuction, a really helpful tool is to identify what type of object was returned.

### Identify a thing

Using `i` right after get something or a value, will give you some good information on what that thing is:

```
iex(7)> v(3)
:world
iex(8)> i
Term
  :world
Data type
  Atom
Reference modules
  Atom
Implemented protocols
  IEx.Info, Inspect, List.Chars, String.Chars
iex(9)>
```



## Objects

### Macros

* `Use ExUnit.case`

### Variables

### Classes

## TDD

### Getting Started

Mix helps you right out of the gate by creating some simple tests for you. To get them running:

```
➜ mix test
Compiling 1 file (.ex)
Generated hello app
..

Finished in 0.06 seconds
1 doctest, 1 test, 0 failures

Randomized with seed 472932
```

Oh wow! Just look at this output for a failing test. Its so simple of a format with its justification. And what is this? `left` and actual `right` values to make it clear during your output when you are not looking at your code.. what the left side is and what the right side is. Also, it tells us with it failed with! The `==` is the failure. Additionaly, we have identified the test it is on `test/hello_test.exs:9` with a line number. Then there is a stacktrace down below. This is exactly how I would move throught the motions of thought when debugging a test:

1. What test am I on?
1. What did it fail on?
1. What is the code?
1. What is the left and right side of the test?
1. What called all this stuff?

I could not ask for anything more perfect (for right now, who knows what tomorrow will bring).

```
➜ mix test


  1) test fails (HelloTest)
     test/hello_test.exs:9
     Assertion with == failed
     code:  assert Hello.hello() == :World
     left:  :world
     right: :World
     stacktrace:
       test/hello_test.exs:10: (test)

..

Finished in 0.09 seconds
1 doctest, 2 tests, 1 failure
```

## Patterns

### App structure

## Frameworks

### Phonix

