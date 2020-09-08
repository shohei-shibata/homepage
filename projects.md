---
title: Projects
layout: default
description: Here are some of my most recently completed web development projects.
---

Here are some of my most recently completed web development projects.

{% for item in site.projects %}

  {% capture title %}
    {{ item.title }}
  {% endcapture %}

  {% capture postUrl %}
    {{ item.url | relative_url }}
  {% endcapture %}

  {% capture excerpt %}
    {{ item.excerpt }}
  {% endcapture %}

  {% if item.feature-image %}
    {% assign name = item.feature-image.name %}
    {% assign date = item.date %}
    {% assign title = item.title %}
    {% include figure.html 
      name = name
      date = date
      title = title
      linkUrl= postUrl
    %}
  {% endif %}

  {% include post-excerpt.html 
    title=title 
    excerpt=excerpt
    postUrl=postUrl
  %}


{% endfor %}

<hr/>

{% include link-strong.html url='/blog' text='Go To My Blog' %}
{% include link-strong.html url='/about' text='About Me' %}
