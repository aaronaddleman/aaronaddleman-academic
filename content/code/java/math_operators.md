---
title: Math
linktitle: math
toc: true
type: book
date: "2020-11-23T10:10Z"
draft: false
---

## math operators

### basic

add, multiply, divide, subtract

You will get a result from the operation

### prefix/postfix

Decrease or increase the value by replacing the original value of the variable.

placing the operator before the variable
placing the operator after the variable,

```java
        int someValue = 5;
        // should print out 6 and change the value stored in someValue
        System.out.println(++someValue);
        // also prints out 6 because the variable was updated
        System.out.println(someValue);
        int someOtherValue = 5;
        // this increments the number, but the printout will show
        // 5 because its a postfix operation
        System.out.println(someOtherValue++);
        // this will print out the resulting value of 6
        System.out.println(someOtherValue);
```

### compound assignment

Operate on a value and the replace the original value with the results of the operation.

```java
        int myOtherValue = 100;
        int val1 = 5;
        int val2 = 10;
        myOtherValue /= val1 * val2;
        System.out.println(myOtherValue);
```

### floating points and remainders

| operation | operator | floating point equation | result | integer equation | result |
| --------- | -------- | :---------------------: | :----: | :--------------: | :----: |
| add       | +        | 1.0 + 2.0               | 3.0    | 1 + 2            | 3      |
| subtract  | -        | 5.0 - 4.0               | 1.0    | 5 - 4            | 1      |
| multiply  | *        | 4.0 * 2.0               | 8.0    | 4 * 2            | 8      |
| divide    | /        | 13.0 / 5.0              | 2.6    | 13 / 5           | 2      |
| modulus   | %        | 13.0 % 5.0              | 3.0    | 13 % 5           | 3      |

### operator precedence

Here is the order of operators sorted by precedence

1. postfix
2. prefix
3. multiplitive
4. additive

You can override precedence with `()` or nested `()` to evaluate from inside out.

```java
        int valA = 21;
        int valB = 6;
        int valC = 3;
        int valD = 1;

        int result1 = valA - valB / valC;
        int result2 = (valA - valB) / valC;

        System.out.println(result1); // 19
        System.out.println(result2); // 5

        int result3 = valA / valC * valD + valB;
        int result4 = valA / (valC * (valD + valB));

        System.out.println(result3); // 13
        System.out.println(result4); // 1
```

### type conversions

Implicit type conversions
: conversion automatically performed by the compiler

Explicit type conversion
: conversion performed explicitily in code with cast operator

```java
        // implicit
        int intValueOne = 50;
        long longValueOne = intValueOne;

        // explicit with cast operator
        long longValueTwo = 50;
        int intValueTwo = (int) longValueTwo;
```

#### implicit

Can widen the variable type, but will not narrow it.

mixed interger sizes
: uses largest integer in equation

mixed floating point sizes
: uses double

mixed integer and floating point
: uses larged floating point in equastion

#### explicit

Can widen and narrow the conversion, but must be aware of potential side-effects. If you go from a wider type to a narrow type, the compiler will throw away anything that is left over.

Casting a floating point to an integer, any fractional portion is discarded.

Integer to a floating point, precision may be lost. Here is an example below:

```java
        int longValueTwo = 2034793482;
        float intValueTwo = (float) longValueTwo;
        System.out.println(intValueTwo); // 2.03479347E9
```
