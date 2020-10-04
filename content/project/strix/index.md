---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Strix"
summary: "A lightweight and simple transaction library using aspects."
authors: []
tags: []
categories: []
date: 2017-09-23

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

url_code: "https://github.com/mcarleio/strix"
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
![Strix](./logo.png)

Strix is a lightweight and simple transaction library using aspects to do the magic.

## Simple Usage

In short terms you have to:
1. Include strix as dependency
    ```xml
    <dependency>
        <groupId>io.mcarle</groupId>
        <artifactId>strix</artifactId>
        <version>1.0.1</version>
    </dependency>
    ```
    
2. Include aspectj-maven-plugin and define strix as `aspectLibrary`
    ```xml
    <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>aspectj-maven-plugin</artifactId>
        <version>1.10</version>
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
                    <artifactId>strix</artifactId>
                </aspectLibrary>
            </aspectLibraries>
        </configuration>
    </plugin>
    ```

3. Start strix before you call any transactional methods 
    ```java
    import io.mcarle.strix.Strix;
    import org.glassfish.jersey.servlet.ServletContainer;

    public class ExampleServlet extends ServletContainer {
    
        @Override
        public void destroy() {
            super.destroy();
            Strix.shutdown();
        }
    
        @Override
        public void init() throws ServletException {
            Strix.startup();
            super.init();
        }
    }
    ```

4. Annotate your classes or methods, which should be transactional with strix's `@Transactional`-Annotation like
    ```java
    import io.mcarle.strix.annotation.Transactional;
    import static io.mcarle.strix.Strix.em;
 
    @Transactional
    public class ExampleManager {
       public <T> T find(Class<T> entityClass, Long id) {
            return em().find(entityClass, id);
       }
    }
    ``` 

## More information and example
[https://github.com/mcarleio/strix](https://github.com/mcarleio/strix)