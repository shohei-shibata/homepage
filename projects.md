---
title: Projects
layout: default
---

Here are some of my most recently completed web development projects

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

  {% include post-excerpt.html 
    title=title 
    excerpt=excerpt
    postUrl=postUrl
  %}


{% endfor %}

<hr/>

{% include link-strong.html url='/services' text='Need a website?' %}
{% include link-strong.html url='/blog' text='Go To My Blog' %}
{% include link-strong.html url='/about' text='About Me' %}
