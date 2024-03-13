---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 40

title: Experience
subtitle:

# Date format for experience
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: Software Developer
    company: INFORM GmbH - Optimization Software
    company_url: 'https://inform-software.com'
    location: Aachen, Germany
    date_start: '2021-08-01'
    date_end: ''
    description: |2-
        Redevelopment of a product that manages and optimizes the processes on container terminals.
        For this purpose, a distributed system is used, which by means of Kubernetes enables the independent scaling of individual services.
        The backend services are based on hexagonal architecture (comparable to Clean Architecture or Onion
        Architecture) and developed on the basis of Spring Boot and Kotlin.
        The micro frontends, written in Angular, communicate with their backend via GraphQL and display live data.

  - title: Software Developer
    company: Panasonic Europe Ltd.
    company_url: 'https://panasonic.com'
    location: Hamburg, Germany
    date_start: '2019-01-01'
    date_end: '2021-07-31'
    description: |2-
        I worked on a dockerized, Kotlin-based, Spring Boot web application with an Angular frontend,
        controlling approval processes via Camunda BPMN with dynamic rules based on DMNs.
        We migrated the application into the AWS cloud and used Terraform to define its infrastructure as code.

  - title: Project Manager
    company: Enghouse Networks (Germany) GmbH
    company_url: 'https://enghousecarrierservices.de'
    location: Düren, Germany
    date_start: '2017-04-01'
    date_end: '2018-12-31'
    description: |2-
        I managed a project with several large telecommunications service providers and implemented their requirements based on JIRA.
        Internally, I was responsible for planning and developing a successor product for automated information procedures in accordance with §112 TKG
        and used technologies like CQRS, Apache Camel, Event Sourcing, Vaadin, and OSGi.

  - title: Software Developer
    company: 'XConnect GmbH (now: Enghouse Networks (Germany) GmbH)'
    company_url: 'http://xconnect.de'
    location: Düren, Germany
    date_start: '2012-01-11'
    date_end: '2017-03-31'
    description: |2-
        I was responsible for various Java EE web applications targeting the telecommunication market in Germany.
        In collaboration with my colleagues, I planned, documented, and implemented new applications, as well as maintained and extended existing ones.
        Furthermore, I also acted as 2nd level support for our customers via mail and phone.

  - title: 'Start-up: Co-Founder and CTO'
    company: 'Bontoo Mobile Development UG (with limited liability)'
    company_url: 'https://bontoo.de'
    location: Würselen, Germany
    date_start: '2014-03-01'
    date_end: '2016-06-30'
    description: |2-
        The start-up focused on developing mobile apps in the B2B market. My area of responsibility was IT project
        management and the development of backend systems and REST interfaces that were accessed by the mobile apps.
        I also advised potential customers on how a mobile application could facilitate daily work in their business area.

  - title: 'Apprenticeship: Mathematical-Technical Software Developer (MATSE)'
    company: 'sms eSolutions GmbH (now: Enghouse Networks (Germany) GmbH)'
    company_url: 'http://sms-esolutions.de'
    location: Düren, Germany
    date_start: '2009-07-01'
    date_end: '2012-01-10'
    description: |2-
        I started my career with a dual study program, i.e.with an apprenticeship as Mathematical-Technical Software Developer
        (abbreviated as MATSE in German) and a parallel bachelor study in Scientific Programming.
        
        The company was formerly known as sms eSolutions GmbH. In 2014, XConnect Ltd. London acquired the company and renamed it to XConnect GmbH.
        In 2017 it was sold to Enghouse Systems Limited from Canada and from there on operates as Enghouse Networks (Germany) GmbH.
        
---
