---
title: Blog
permalink: "/blog/"
layout: default
description: Here are all of my blog posts.
---

{% for item in site.posts %}

  {% capture title %}
    {{ item.title }}
  {% endcapture %}

  {% capture postUrl %}
    {{ item.url | relative_url }}
  {% endcapture %}

  {% capture excerpt %}
    {{ item.excerpt }}
  {% endcapture %}

  {% include post-excerpt.html 
    title=title 
    excerpt=excerpt
    postUrl=postUrl
  %}

{% endfor %}

<hr/>

{% include link-strong.html url='/about' text='About Me' %}
{% include link-strong.html url='/projects' text='Web Development Projects' %}
