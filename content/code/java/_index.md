---
linktitle: Java
summary: Lessons of the Java world
weight: 1

title: Overview
date: "2020-11-07T09:54:24Z"
lastmod: "2020-11-07T09:54:24Z"
draft: false  # Is this a draft? true/false
toc: false  # Show table of contents? true/false
type: docs  # Do not modify.

menu:
  java:
    name: Java
    weight: 1
---

## the summary

This book is all about my investigation with the Java language.
Content will change and topics might move around I as gain deeper
understanding. But really, I am just diagnosing of error messages.

TODO: Move this content to a sub topic

The following defines the database connection for the SpringBoot App

`src/main/resources/application.properties`

```shell
spring.datasource.url=jdbc:postgresql://localhost:5432/conference_app
spring.datasource.username=postgres
spring.datasource.password=welcome
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=none
spring.jpa.hibernate.show-sql=true
```
