---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Python"
linktitle: "Python"
summary: "This language has grown lots over the years and here are my notes."
date: 2021-04-20T09:22:11-07:00
lastmod: 2021-04-20T09:22:11-07:00
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
    name: python
    # parent: YourParentID
    weight: 1
---

## datatypes

### tuple

### dictionary

### string

What is it?

A thing that holds a list of characters. Why do I say a list? Because its true! You are able to use the same index option in the [#list](#list) datatype when issuing a fetch of a value by an index number (eg. `mystring[1]` to get the second character of the object called `mystring`).

When to use it?

Pretty much when ever you want hold a list of

How to use it?

```python
In [1]: mystring = "hello aaron"

In [2]: mystring[1]
Out[2]: 'e'

In [3]:
```

### integer

What is it?

A thing that holds whole numbers or float numbers

When to use it?

To hold numbers or do maths.

How to use it?

```python
# create an integer
myint = 123
```



### list

What is it?

A thing that holds a list of things and allows for referencing by an index or position or range of some items.

When to use it?

These are great for holding things in an order (or can be unordered) to hold some data. You can define these in a couple of different ways.

How to use it?

```python
# a blank list
mylist = []
# adding to a list
mylist.append('value')
# get the first item
mylist[0]
# get the last item
mylist[-1]
```

## classes

### dataclasses

I really like the `dataclasses` and while they can be a little confusing at first, they do cover lots of boilerplate code.

The following are some examples I have for how to use this really cool object:

## stackdump and debug

### stackdump

How to read it?

...

### debug

What can I do to improve debugging?

...
