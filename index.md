---
layout: default
---

{% assign post = site.posts[0] %}

# {{ post.title }}

{{ post.content }}

<hr/>

{% include link-strong.html url='/blog' text='See More Blog Posts' %}
{% include link-strong.html url='/projects' text='Web Development Projects' %}
{% include link-strong.html url='/about' text='About Me' %}
