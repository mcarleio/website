---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Sciurus"
summary: "Sciurus is a collection of useful aspects like monitoring execution runtimes of methods or caching their result"
authors: []
tags: []
categories: []
date: 2018-02-07

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: "https://github.com/mcarleio/sciurus"
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

![Sciurus](./logo.png)
Sciurus is a collection of useful aspects to
* monitor execution runtimes of methods
* lock method executions
* cache method results
* retry method executions on exceptions


## General Usage

You need to include Sciurus as dependeny and declare it as an aspect library in the `aspectj-maven-plugin`.

1. Include Sciurus as dependency
    ```xml
    <dependency>
        <groupId>io.mcarle</groupId>
        <artifactId>sciurus</artifactId>
        <version>1.1.0</version>
    </dependency>
    ```
    
2. Include aspectj-maven-plugin and define Sciurus as `aspectLibrary`
    ```xml
    <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>aspectj-maven-plugin</artifactId>
        <version>1.11</version>
        <executions>
            <execution>
                <goals>
                    <goal>compile</goal>
                    <goal>test-compile</goal>
                </goals>
            </execution>
        </executions>
        <configuration>
            <complianceLevel>${maven.compiler.source}</complianceLevel>
            <source>${maven.compiler.source}</source>
            <target>${maven.compiler.target}</target>
            <aspectLibraries>
                <aspectLibrary>
                    <groupId>io.mcarle</groupId>
                    <artifactId>sciurus</artifactId>
                </aspectLibrary>
            </aspectLibraries>
        </configuration>
    </plugin>
    ```

## Use Case Examples
There are a number of possible use cases for each aspect.

### @Monitor
* Notify a monitoring application
* Find bottlenecks
* Test the speed of a new software version before deploying it in production
* Store execution times (e.g. in a database) and
  * see how they evolve over time
  * see runaway values
  * monitor them through a MBean
  
### @Cache
* Caching (surprise!)
* Facade for various caches which can be exchanged with merely little code changes

### @Lock
* Prevent multiple storing (e.g. in databases)
* Prevent multiple execution of long running or high cpu consuming methods (e.g. in combination with `@Cache`)
  
### @Retry
* Retry storing entities into the database due to locking exceptions
* Retry a failed connection to a web service
* Retry a method which may lead to some random or temporary incidents


## More information and example
[https://github.com/mcarleio/sciurus](https://github.com/mcarleio/sciurus)