---
title: Unresolved Compilation
linktitle: Errors
toc: true
type: book
date: "2019-05-05T00:00:00Z"
draft: false
---

List of errors that I have ran into across the vast great plains of
Java landscape to avoid the dark depths of madness.

Ok that was too bleak.

TLDR;

List of errors I have found along my Java journeys.

## Error

```java
org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sessionRepository' defined in com.pluralsight.conferencedemo.repositories.SessionRepository defined in @EnableJpaRepositories declared on JpaRepositoriesRegistrar.EnableJpaRepositoriesConfiguration: Cannot resolve reference to bean 'jpaMappingContext' while setting bean property 'mappingContext'; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'jpaMappingContext': Invocation of init method failed; nested exception is javax.persistence.PersistenceException: [PersistenceUnit: default] Unable to build Hibernate SessionFactory; nested exception is org.hibernate.MappingException: Could not get constructor for org.hibernate.persister.entity.SingleTableEntityPersister
        at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:342) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:113) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1697) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1442) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:593) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:516) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:324) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:322) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeansOfType(DefaultListableBeanFactory.java:624) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.DefaultListableBeanFactory.getBeansOfType(DefaultListableBeanFactory.java:612) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.data.repository.config.DeferredRepositoryInitializationListener.onApplicationEvent(DeferredRepositoryInitializationListener.java:51) ~[spring-data-commons-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at org.springframework.data.repository.config.DeferredRepositoryInitializationListener.onApplicationEvent(DeferredRepositoryInitializationListener.java:36) ~[spring-data-commons-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at org.springframework.context.event.SimpleApplicationEventMulticaster.doInvokeListener(SimpleApplicationEventMulticaster.java:172) ~[spring-context-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:165) ~[spring-context-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:139) ~[spring-context-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.context.support.AbstractApplicationContext.publishEvent(AbstractApplicationContext.java:404) ~[spring-context-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.context.support.AbstractApplicationContext.publishEvent(AbstractApplicationContext.java:361) ~[spring-context-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.context.support.AbstractApplicationContext.finishRefresh(AbstractApplicationContext.java:898) ~[spring-context-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:554) ~[spring-context-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143) ~[spring-boot-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:758) ~[spring-boot-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:750) ~[spring-boot-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:397) ~[spring-boot-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:315) ~[spring-boot-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1237) ~[spring-boot-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1226) ~[spring-boot-2.3.4.RELEASE.jar:2.3.4.RELEASE]
        at com.pluralsight.conferencedemo.ConferenceDemoApplication.main(ConferenceDemoApplication.java:10) ~[classes/:na]
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'jpaMappingContext': Invocation of init method failed; nested exception is javax.persistence.PersistenceException: [PersistenceUnit: default] Unable to build Hibernate SessionFactory; nested exception is org.hibernate.MappingException: Could not get constructor for org.hibernate.persister.entity.SingleTableEntityPersister
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1794) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:594) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:516) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:324) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:322) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:202) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:330) ~[spring-beans-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        ... 28 common frames omitted
Caused by: javax.persistence.PersistenceException: [PersistenceUnit: default] Unable to build Hibernate SessionFactory; nested exception is org.hibernate.MappingException: Could not get constructor for org.hibernate.persister.entity.SingleTableEntityPersister
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:403) ~[spring-orm-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264) ~[na:na]
        at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130) ~[na:na]
        at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630) ~[na:na]
        at java.base/java.lang.Thread.run(Thread.java:832) ~[na:na]
Caused by: org.hibernate.MappingException: Could not get constructor for org.hibernate.persister.entity.SingleTableEntityPersister
        at org.hibernate.persister.internal.PersisterFactoryImpl.createEntityPersister(PersisterFactoryImpl.java:123) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.persister.internal.PersisterFactoryImpl.createEntityPersister(PersisterFactoryImpl.java:77) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.metamodel.internal.MetamodelImpl.initialize(MetamodelImpl.java:181) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:301) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:469) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1259) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:58) ~[spring-orm-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:365) ~[spring-orm-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:391) ~[spring-orm-5.2.9.RELEASE.jar:5.2.9.RELEASE]
        ... 4 common frames omitted
Caused by: org.hibernate.InstantiationException: could not instantiate test object : com.pluralsight.conferencedemo.models.Speaker
        at org.hibernate.engine.internal.UnsavedValueFactory.instantiate(UnsavedValueFactory.java:43) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.engine.internal.UnsavedValueFactory.getUnsavedIdentifierValue(UnsavedValueFactory.java:68) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.tuple.PropertyFactory.buildIdentifierAttribute(PropertyFactory.java:62) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.tuple.entity.EntityMetamodel.<init>(EntityMetamodel.java:136) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.persister.entity.AbstractEntityPersister.<init>(AbstractEntityPersister.java:604) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at org.hibernate.persister.entity.SingleTableEntityPersister.<init>(SingleTableEntityPersister.java:125) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        at java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method) ~[na:na]
        at java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62) ~[na:na]
        at java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45) ~[na:na]
        at java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500) ~[na:na]
        at java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481) ~[na:na]
        at org.hibernate.persister.internal.PersisterFactoryImpl.createEntityPersister(PersisterFactoryImpl.java:96) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        ... 12 common frames omitted
Caused by: java.lang.reflect.InvocationTargetException: null
        at java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method) ~[na:na]
        at java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62) ~[na:na]
        at java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45) ~[na:na]
        at java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500) ~[na:na]
        at java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481) ~[na:na]
        at org.hibernate.engine.internal.UnsavedValueFactory.instantiate(UnsavedValueFactory.java:40) ~[hibernate-core-5.4.21.Final.jar:5.4.21.Final]
        ... 23 common frames omitted
Caused by: java.lang.Error: Unresolved compilation problem:
        GenerationType cannot be resolved to a variable

        at com.pluralsight.conferencedemo.models.Speaker.<init>(Speaker.java:17) ~[classes/:na]
        ... 29 common frames omitted
```

### What should I read

This error is pointing out that the `GenerationType cannot be resolved to a variable` in the file
`Speaker.java` at line `17`. Currently this file has the following content:

```java
package com.pluralsight.conferencedemo.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;

import org.hibernate.annotations.Type;


@Entity(name = "speakers")
public class Speaker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long speaker_id;

    private String first_name;
    private String last_name;
    private String title;
    private String company;
    private String speaker_bio;
    // this is a byte array to hold binary data
    // lob = large object and helps with large amounts of data
    // type =
    // without this, the JPA will get an exception when trying to
    // push into the db
    @Lob
    @Type(type="org.hibernate.type.BinaryType")
    private byte[] speaker_photo;

    @ManyToMany(mappedBy = "speakers")
    private List<Session> sessions;

    public List<Session> getSessions() {
        return this.sessions;
    }

    public byte[] getSpeaker_photo() {
        return this.speaker_photo;
    }

    public void setSpeaker_photo(byte[] speaker_photo) {
        this.speaker_photo = speaker_photo;
    }

    public void setSessions(List<Session> sessions) {
        this.sessions = sessions;
    }

    public Speaker() {
    }

    public Long getSpeaker_id() {
        return this.speaker_id;
    }

    public void setSpeaker_id(Long speaker_id) {
        this.speaker_id = speaker_id;
    }

    public String getFirst_name() {
        return this.first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return this.last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompany() {
        return this.company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getSpeaker_bio() {
        return this.speaker_bio;
    }

    public void setSpeaker_bio(String speaker_bio) {
        this.speaker_bio = speaker_bio;
    }

}
```

### What is the fix

While this is a ton of text, the solution is
simple:

Add the following to your imports list:

```java
import javax.persistence.GenerationType;
```
