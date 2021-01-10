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
      {%- if post.data.description -%}
        <p>{{ post.data.description }}</p>
      {%- endif -%}
    </li>
  {%- endfor -%}
  </ul>
</div>
