---
title: Compilation problems 
linktitle: Compilation Problems
toc: true
type: docs
date: "2020-11-07T03:37"
draft: false
menu:
  java:
    parent: errors
    weight: 1

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

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
Caused by: org.hibernate.InstantiationException: could not instantiate test object : com.pluralsight.conferencedemo.models.Session
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
Caused by: java.lang.Error: Unresolved compilation problems:
        The annotation @ManyToAny must define the attribute metaColumn
        Syntax error, insert "}" to complete MethodBody

        at com.pluralsight.conferencedemo.models.Session.<init>(Session.java:23) ~[classes/:na]
        ... 29 common frames omitted
```

### Reason

This error is saying there is a syntax issue with the `@ManyToAny` annotation
located in file `Session.java` on line `23`.

### Fix

This was a typo on my part. There is no `@ManyToAny` annotation. So replacing this
with the correct value of `@ManyToMany` resolved the issue.
