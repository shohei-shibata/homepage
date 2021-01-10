---
title: Blog
layout: layout.liquid
---

# Blog Posts

<div class="list-posts">
  <ul>
  {%- for post in collections.post -%}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
      <p>{{ post.data.description }}</p>
    </li>
  {%- endfor -%}
  </ul>
</div>
