---
title: Conditional Logic
linktitle: cond_logic
toc: true
type: docs
date: "2020-11-23T10:10Z"
draft: false
menu:
  java:
    parent: Java
    weight: 4

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 4
---

## conditional logic

1. relational operators
2. contiditional assignments
3. if-else
4. chaining if-else
5. logical operators
6. block statements
7. switch

### contitional assignments

```java
        int value1 = 7;
        int value2 = 5;
        // returns value1 if true, or value2 if false
        int maxValue = value1 > value2 ? value1 : value2;
        System.out.println(maxValue); // prints 7
```

### if-else

```java
        int value1 = 10;
        int value2 = 4;
        if (value1 > value2 )
            System.out.println("value 1 is bigger");
        else
            System.out.println("value 1 else");
```

### chaining if-else

First one to test true gets evaluated.

```java
        int value1 = 10;
        int value2 = 40;
        if (value1 > value2 )
            System.out.println("value 1 is bigger");
        else if (value1 < value2)
            System.out.println("value 2 is bigger");
        else
            System.out.println("value 1 and value 2 are equal");
```

another example

```java
        double value1 = 100.0d;
        double value2 = 50.0d;
        double result = 0.0d;
        char opCode = 's';

        if(opCode == 'a')
            result = value1 + value2;
        else if(opCode == 's')
            result = value1 - value2;
        else if (opCode == 'm')
            result = value1 * value2;
        else if (opCode == 'd')
            result = value1 / value2;
        else
            result = 0.0d;

        System.out.println(result);
```

### logical operators

produce a signal true or false result from true or false values

| operator name | operator symbol | what resolves to true |
| ------------- | --------------- | --------------------- |
| And           | &               | `true & true`         |
| Or            | \               | `false | true` ... `true | false` ... `true | true` |
| Exclusive or (XOR) | ^ | `false ^ true` ... `true ^ false` |
| Negation      | ! | `false` |

```java
        int a = 20, b = 14, c = 5;
        if ( a > b & b > c)
            System.out.println("a is greater than c");
```

### conditional logical operators

And = &&
: Only executes the right side if left side is true.

```java
        int students = 150;
        int rooms = 0;

        if(rooms != 0 && students/rooms > 30)
            System.out.println("Crowded");

        System.out.println();
        System.out.println("*** end of program ***"); // this prints out because the app does not crash due to dividing by 0
```

Or = ||
: Executes rigth only when left is false.

### block statements

1. groups statements together
2. creates a compound statement
3. enclose statements in opening and closing brackets

```java
        int v1 = 150, v2 = 4;
        final int diff;

        if (v1 > v2) {
            diff = v1 - v2;
            System.out.println("v1 is bigger than v2, diff = " + diff);
        }
        else {
            diff = v2 - v1;
            System.out.println("v1 is not bigger than v2, diff = " + diff);
        }
```

A variable defined within a block statement is not visible outside of the block.

```java
        // this results in a error message below
        double students = 30.0d, rooms = 4.0d;

        if(rooms > 0.0d) {
            System.out.println(students);
            System.out.println(rooms);
            double avg = students / rooms;
            System.out.println(avg);
        }
        System.out.println(avg);
```

```text
Exception in thread "main" java.lang.Error: Unresolved compilation problem: 
        avg cannot be resolved to a variable

        at com.pluralsight.organized.Main.main(Main.java:15)
```

