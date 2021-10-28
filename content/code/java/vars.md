---
title: Vars
linktitle: vars
toc: true
type: book
date: "2020-11-23T10:10Z"
draft: false
---

## variables

Valid variable names:

```java
int total;
int grade4;
int totalPer = 400;
```

Invalid variable names:

```java
int 2much;
```

Naming styles:

```java
int sum;
int studentCount;
int bankAccountBalance;
int level2Training;
```

Primative Data types:

These are the types of variables which are the foundation of all other data types. They are:

1. Interger
2. Floating point
3. Character
4. Boolean

### interger types

| type  | bits | min value            | max value           | literal form |
| ----- | ---- | -------------------- | ------------------- | ------------ |
| byte  | 8    | -128                 | 127                 | 0            |
| short | 16   | -32768               | 32767               | 0            |
| int   | 32   | -2147483648          | 2147483647          | 0            |
| long  | 64   | -9223372036854775808 | 9223372036854775808 | 0L           |

```java
byte numberOfThings = 45;
short feetInAMile = 5280;
int milesToSun = 92960000;
// note the adding of L at the end of the number
// this indicates it is a long number
long milesInALightYear = 5879000000000L;
```

### floating point types

| type   | bits | smallest positive value | largest positive value | literal form |
| ------ | ---- | ----------------------- | ---------------------- | ------------ |
| float  | 32   | $1.4 * 10^{-45}$        | $3.4 * 10^{38}$        | 0.0f         |
| double | 64   | $4.9 * 10^{-324}$       | $1.7 * 10^{308}$       | 0.0 or 0.0d  |

```java
float kilometersInAMarathon = 42.195f;
float absoluteZeorInCelsius = -273.15f;
double atomWithInMeters = 0.0000000001d;
```

### character data type

```java
char regularU = 'U';
// unicode of uppercase U with an accent
char accentedU = '\u00DA';
```

### boolean type

```java
boolian iLoveJava = true;
```

### storage

Each definition of a variable gets it own allocation. When you associate a variable to an existing variable, a copy is made. There is no relation between the two. If later on, the source variable changes, the copy will remain with its original value and not be affected.
