---
title: My Personal Homepage
layout: post
---

The biggest lesson I learned from creating this website has been about what it *doesn't* need. 

For a web developer, there is definitely no shortage of new technologies and frameworks to choose from. A web development framework, for those who are not familiar, is a software that makes building a website or an app more efficient. It allows you to produce a complex product quicker, more efficiently. 

In building this website, I looked at Nextjs and Gatsby, two popular frameworks for React. This was not because I saw them as the best choice for the task at hand, but because I wanted to learn.

I will write about those frameworks in a blog post in the future.

What I realized from this was that, in a simple, non-interactive website like this (basically a blog), there is very little advantage of using React, and a lot of disadvantages.

React is for interactive web apps. It can efficiently update an element in the page depending on the state of another element, and it will only update that one element instead of re-rendering the entire page. 

It is a necessity for an app like Facebook, but not necessary for my homepage. Every page on this website consists of the header, a single main content (usually an article), and a footer. Very few components. Also very few interactive elements.

So you can say React is overkill for this page. And it's also wasteful. 

***Show examples of the performance cost***

Instead, I built the website with Jekyll, a static website generator. 

In making a relatively simple website, I feel that a tool like Jekyll gives me just enough to make the process efficient, and nothing more. I am coding in plain HTML most of the time, only inserting Liquid syntax when necessary to adapt content to that particular page. What's great about this is that my brain stays *closer to the final product.*

No matter what tools or technologies are used to build a website, ultimately it all ends up into some HTML and CSS files (plus Javascript, images and other assets if needed). React can be a great tool, but it's always going to be a layer of abstraction. While I am building the site in React, I am immersed in Javascript and React code. I never have to see the jumble of code that comes out the other end.

Nextjs or Gastby are tools that can make the code generation easier, but output is the same, if not worse. Efficient tools can enable people do more unnecessary things. 
