---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "GetFav"
summary: "GetFav is a simple online service to retrieve any favicon from every public website"
tags: []
date: 2016-03-01

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
links:
- name: Project Homepage
  url: https://getfav.com
  icon_pack: fas
  icon: link

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
![GetFav](./logo.png)

GetFav is a simple to use online service to serve favicons for any public website. 

For example, if you want to have the favicon for Google in 32px, you simply have to call `https://getfav.com/api/get?host=google.com&size=32`, which will result in ![Google](https://getfav.com/api/get?host=google.com&size=32)

Once a favicon was queried, GetFav caches it for some period of time and therefore can serve future requests for the same domain much faster: instead of having to query it from the actual website, it returns the favicon directly from its cache.

GetFav offers you many useful customization features like
* query favicon in specific size
* scale the favicon or put a frame around it
* change MIME type, e.g. if you need a PNG instead of an ICO

## More information
See the documentation: [https://getfav.com/#!/documentation](https://getfav.com/#!/documentation)