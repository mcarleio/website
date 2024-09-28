---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Konvert"
summary: "Konvert is a kotlin compiler plugin using KSP API to generate kotlin code to map one class to another"
tags: []
date: 2023-03-01

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
#links:
#- name: Project Homepage
#  url: https://getfav.com
#  icon_pack: fas
#  icon: link

url_code: "https://github.com/mcarleio/konvert"
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

Konvert is like Mapstruct for Kotlin.
It is a kotlin compiler plugin using KSP API to generate kotlin code to map one class to another.
It is open-source and available on [GitHub](https://github.com/mcarleio/konvert).

There are three different ways to use Konvert:

1. Using `@KonvertTo` on source class:

   ```kotlin
   @KonvertTo(PersonDto::class)
   class Person(val firstName: String, val lastName: String)
   class PersonDto(val firstName: String, val lastName: String)
   ```

   This will generate the following extension function
   
   ```kotlin
   fun Person.toPersonDto(): PersonDto =
      PersonDto(firstName = firstName, lastName = lastName)
   ```          
   
2. Using `@KonvertFrom` on target class (especially useful, if you cannot change the code of the source class)
  
   ```kotlin
   class Person(val firstName: String, val lastName: String) {
      @KonvertFrom(PersonDto::class)
      companion object
   }
   class PersonDto(val firstName: String, val lastName: String)
   ```
   
   This will generate the following extension function

   ```kotlin
   fun Person.Companion.fromPersonDto(personDto: PersonDto): Person =
     Person(firstName = personDto.firstName, lastName = personDto.lastName)
   ```
   
3. Using `@Konverter` on interfaces:

   ```kotlin
   class Person(val firstName: String, val lastName: String)
   class PersonDto(val firstName: String, val lastName: String)
   
   @Konverter
   interface PersonMapper {
     fun toDto(person: Person): PersonDto
   }
   ```

   This will generate the following object

   ```kotlin
   object PersonMapperImpl: PersonMapper {
     override fun toDto(person: Person): PersonDto
       = PersonDto(firstName = person.firstName, lastName = person.lastName)
   }
   ```

## More information

See the documentation: [https://mcarleio.github.io/konvert/](https://mcarleio.github.io/konvert/)

