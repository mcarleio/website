---
title: Cryptonify
summary: Cryptonify is a platform independent fully featured offline password manager including syncing, browser extensions and an Android App
tags: []
date: 2011-05-01

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: ""
  focal_point: ""
  preview_only: true

# links:
# - name: Project Homepage
#   url: https://marcel-carle.de/software/cryptonify/
#   icon_pack: fas
#   icon: link

url_code: ""
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

![Cryptonify](./logo.png)

Cryptonify is a platform independent password manager written in Java. It stores the entered data encrypted with AES-256 in a local file,
which you may manually sync with your devices or use the included Dropbox sync feature.
You can even sync and manage your passwords on Android using the
official [Android app](https://play.google.com/store/apps/details?id=de.marcelcarle.pwm.activities).

With the help of browser extensions, Cryptonify offers an integration into the most common
browsers ([Chromium based](https://chrome.google.com/webstore/detail/cryptonify/niajmakogjdmabgpfdnmlnfimkakiblf), [Firefox](https://addons.mozilla.org/de/firefox/addon/cryptonify/))
and e.g. have your username and password automatically entered into the designated form fields.

{{< toc >}}

## History

### How it started

During my last school year, I tried some password managers, but none fulfilled my needs.
As I had just written a research paper about steganography and therefore learned some basics about cryptography, I developed my own password
manager - back then I wrote it using Delphi.

When I started my dual studies program, I had to learn Java and as some fellow students had shown interest in my password manager, I decided
to completely rewrite it.
Besides, there weren't as many good password managers on the market back then as there are today.

### Evolution

The first official release was in Q3 of 2011, but it evolved quickly. Short after the first release, I started implementing an Android App and released it in Q2 of 2012.
To sync the data between mobile devices and computer, I added a Dropbox synchronization in Q3 of 2012.
Beside many other improvements (like better integration in Mac OS X and usage of [Excelsior JET](https://en.wikipedia.org/wiki/Excelsior_JET), an AOT-Compiler, to create native executables), I then started developing a browser extension and released it in Q2 of 2013.

In mid 2015 I received a press inquiry for an article about Cryptonify. It was later published in the
[Linux User magazine]({{< relref "/publication/cryptonify" >}}).

Between 2017 and 2020 I only did some minor bugfixes and external API updates.
Mid of 2020 I added an export functionality and data breach check,
before I stopped the development end of 2020.

## Features

Cryptonify has gained a lot of features since I started developing it. Here are some of them:

* **OS independent**: Runs everywhere, where Java 8 is running: Windows, Linux, MacOS, Android.
* **256-bit AES encryption** to keep your data secure.
* **Dropbox synchronization** to sync your data to all devices.
* **Browser extension** for [Chromium based](https://chrome.google.com/webstore/detail/cryptonify/niajmakogjdmabgpfdnmlnfimkakiblf) browsers and [Firefox](https://addons.mozilla.org/de/firefox/addon/cryptonify/)
* **Android apps** to access your data while you are on the move: [Cryptonify Start](https://play.google.com/store/apps/details?id=de.marcelcarle.pwm.activities), [Cryptonify](https://play.google.com/store/apps/details?id=de.marcelcarle.pwm.pro.activities) and [Cryptonify Internet Extension](https://play.google.com/store/apps/details?id=de.marcelcarle.cry.internet)
* **Multilingual**: Translation for English and German
* **Automatic data backups** in case you accidentally deleted something.
* **Favicon download**: If you entered a website URL, Cryptonify can automatically download the favicon for you and use it as the entry's icon.
* **Icon download**: When creating a category, Cryptonify can automatically search and download for matching icons (based on category name) and use it as the category's icon.
* **Personalization**: You can completely change the design of Cryptonify by selecting one of the provided themes. Also, you can customize some colors according to your preferences.
* **Data breach check**: You can manually trigger a data breach check for all stored passwords.
* **Search functionality** to find your data quick and easy.
* **Import/Export** data from/to other password managers

## Download

{{% callout warning %}}
Cryptonify is not actively developed any further and therefore is no longer maintained!
{{% /callout %}}

Latest (portable) version: [Cryptonify 2.3.1](/cryptonify/cryptonify-2.3.1.zip)

You need to have [Java 8](https://adoptium.net/de/temurin/releases/?version=8) to run Cryptonify.

