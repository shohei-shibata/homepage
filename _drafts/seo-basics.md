---
title: Simple Steps to Cover the Basics of SEO
layout: post
author: Shohei Shibata
---

When it comes to SEO (Search Engine Optimization), I often feel a bit overwhelmed. There seem to be tons of information out there. You will find many tips, tricks and hacks to gain an advantage over other websites. There are professional consultants promising to use the expert knowledge to launch you to the top of the search results.

Is all of that really necessary? From what I learned, I think there are definitely some basic things we should all do to at least, not hurt the chances of our websites not being found. I want my website to be able to appear on the search results. Do I strive to be the top result? Not particularly. I'd like to think that something like that happens from having good content, not having the best SEO tricks. 

Well, I might be wrong on that actually.

If I type "cat website" on Google, one of the top results will be... *[Cat Bounce!](https://cat-bounce.com/){:target="_blank"}*

![Screenshot of the Google search results for "cat website"]()
![Screenshot of Cat Bounce!]()

There you will find exactly what you think you will find. Cats bouncing. And abnoxious flashing colors. Not exactly what I think of as "good content" but it is at the top of the search results. This website either has excellent SEO or the demise of humanity is closer than I hope. Maybe a little bit of both.

Anyway, let's see if we can learn a few things about SEO from this website.

### Title and Description

At the top of the `<head>` section, you will find the title with the `<title>` tag and the description under the `<meta>` tag with `name="description`.

```html
<head>
    <meta charset="utf-8">
    <title>CAT BOUNCE!</title>

    <!-- META -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cat Bounce! A website of bouncing cats.">
```

This is very easy to do! The title and description is exactly what appears on the Google search, so you'll want to make sure it clearly communicates what the website contains!

Here, it's best to have a unique descriptive title for each page within the website. 

```
    <!-- Facebook -->
    <meta property="og:title" content="CAT BOUNCE!">
    <meta property="og:url" content="https://www.cat-bounce.com">
    <meta property="og:site_name" content="CAT BOUNCE!">
    <meta property="og:type" content="website">
    <meta property="og:description" content="It's Cat Bounce, what more do you need to know?">
    <meta property="og:image" content="https://www.cat-bounce.com/catbounce.png">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="CAT BOUNCE!">
    <meta name="twitter:url" content="https://www.cat-bounce.com">
    <meta name="twitter:description" content="It's Cat Bounce, what more do you need to know?">
    <meta name="twitter:image:src" content="https://www.cat-bounce.com/catbounce.png">
    <link rel="image_src" href="catbounce.png">

    <!-- CSS -->
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	<link href="https://www.cat-bounce.com/favicon.ico" rel="icon" type="image/png">


    <meta property="og:title" content="CAT BOUNCE!">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://cat-bounce.com">
    <meta property="og:image" content="https://cat-bounce.com/catbounce.png">
    <meta property="og:description" content="It's Cat Bounce, what more do you need to know?">
    <meta property="og:site_name" content="CAT BOUNCE!">

	<link rel="stylesheet" href="https://use.typekit.net/kru4mvi.css">
	<link href="css/application-werk.css" rel="stylesheet">

<!-- Global site tag (gtag.js) - Google Analytics -->
<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-3300631-9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-3300631-9');
</script>


</head>
```


