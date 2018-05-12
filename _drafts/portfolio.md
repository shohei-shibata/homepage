---
layout: post
image: "/assets/images/posts/portfolio/portfolio-banner-image.png"
title:  "My Portfolio"
categories: Projects
tags: ["Figma", "Jekyll"]
site_url: "Live App URL"
code_repo_url: "Code Repo Url"
excerpt: My portfolio website designed on Figma and developed using Jekyll. Click on to learn about my process of creating this website.
---

I am a big fan of minimal, very readable websites. So when I began working on my personal portfolio, that was my number one focus. So there is probably nothing ground-breaking to write about here in terms of the design or the code. Instead, I'd like to show you the process of building this website. Easy-to-use tools like Figma and Jekyll helped me to really focus on how the portfolio should look and function, as well as to finish it very efficiently.

{% include figure.html image_url="/assets/images/posts/portfolio/framed-screenshot.png" alt="Main page in computer and iphone screen frames" caption="Landing page" %}

### Website Design on Figma

{% include figure.html image_url="/assets/images/posts/portfolio/figma-main-view.png" alt="Figma" caption="A Figma file" %}

[Figma](https://figma.com) is an amazing online tool. It enables me to do everything I need to do in terms of designing a website right in the browser, in such an easy, efficient process.

I'd like to show you how my portfolio was designed on Figma.

#### Getting Started
Once I create a new file in Figma, I create a "UI Library" frame containing the fonts, buttons, and input fields. Just the very, very basics and I don't need to worry about the design of these items at the moment.

**//Screenshot of UI Library Starter**

What is important here, is that these are reusable components, which are simply called "Components" in Figma. 

Components enable users to create multiple instances of a reference component. Make changes to the reference and all changes are reflected on the instances. The instances can be resized and you control how they react when you resize.

Next, I begin drawing my wireframes.

#### Wireframe

**//Screenshot of wireframes**

For my portfolio, I am going to create a landing page, project list page, a detail page for a single project, and a contact page. This set of pages will be created in three screen sizes: desktop, tablet, and phone.

Starting from whatever page I have in mind, I begin laying down components, copying from the UI Library whenever possible. Here I am thinking about the composition of the page: the order, size, and alignment of everything that goes on the page but not the visual details like font family or graphics. 

**//Wireframe screenshot, single frame**

In most cases, many components of a wireframe are reused throughout the design. The navigation bar, the footer, the project summary in the list view among other things. This means they should also be made in a Component to make them easy to keep up-to-date.

The first copy of these items can be made directly in the wireframe. Then, to turn it into a Component, just move it over to a separate frame where other Components are stored, hit `Ctrl-K` on Windows or `?-K` on Mac to turn the item into a Component, then, copy it and paste into back into the wireframe.

Next, let's turn our wireframe into a clickable prototype. 

#### Prototype

**//Screenshot Figma Prototype tab**

On the right side of the Figma screen, there is a tab called Prototype. Clicking on it puts Figma in prototyping mode. Now, when any element is selected it will show a ball on the right side of it. Drag the ball to wherever the element should link to. 

That's all there is to it. Click the triangle "Play" button on the top right, to go into the presentation mode. Now you can click through your website and test its flow. 

After that, it's time to think about the design. 

#### Visual Design
For my portfolio, this step was extremely simple because the design is so minimal. The UI Library items received some design thoughts, like which font to use, the look of the buttons or input fields. The Components received minor fine-tuning. Photos were placed in the rectangle placeholders. 

Then, everything was checked in the prototype mode to get a better feel for how it would look in a browser.

Good. Now it's time to start coding!

### Static Website using HTML/CSS only

Once I am satisfied with the design on Figma, it's time to translate it to code. As the first step, I like to make a plain HTML/CSS version of the website. This way I can focus purely on translating the visual design from Figma to code. 

In most cases I will need to eventually utilize a site-generator (like Jekyll), or add interactivity (Javascript, jQuery, React.js, etc.), but leaving all that until later allows me to focus better, and work more efficiently.

It's also helpful, that simple HTML/CSS website needs no special development environment. I just make a folder in Google Drive and place my files there. Then I can work on it wherever and whenever. 

**//Screenshot, html/css code

Once it looks just like the Figma design, this HTML/CSS code will serve as the master for my final code in Jekyll.

### Transfer to Jekyll, write posts

In the case of my portfolio, I am generating the website using Jekyll.

Although I'd known about it for a long time this was actually the first time I used Jekyll to build a website. Now that I've used it, I can say that it's great. It's really straight forward to customize, easy to add contents, and you can be sure that deploying it on GitHub will be smooth since GitHub Pages are built based on Jekyll also.

First order of business is to install Jekyll in my development environment. That can be done following the [Jekyll documentation](https://jekyllrb.com/docs/installation/).

Then I am ready to create a Jekyll website by simply typing `jekyll new my-website` in the console. A folder named "my-website" is created with a default Jekyll website inside. Or if you'd like, use a unique name other than "my-website".

Here I will not dive into the details of how to customize a Jekyll theme. Once I became familiar with [the anatomy of a Jekyll theme](https://jekyllrb.com/docs/themes/), I began replacing the code with my static HTML and CSS code, using [variables](https://jekyllrb.com/docs/variables/) where applicable.

One thing to note here, is that the default website is loaded with a theme called "minima", but the theme files are not in the folder. I went to the theme's [GitHub repository](https://github.com/jekyll/minima) and copied the files over to my Jekyll website directory. Then, all the files that need to be modified to customize the website will be there.

Once the Jekyll page looks just like the HTML/CSS-only master, I am ready to add content!

The posts are simply Markdown files, with front matter at the top defining things like title, categories, and tags. It's possible to add custom variables as well, which I use for things like the featured image URL. 

That's basically it! I am very excited to have my portfolio up and running. Well, actually now the most important work begins, of filling the portfolio with great projects...

### Conclusion

Having discovered Figma has really changed my workflow for me. It makes it so easy for me to work on design from anywhere where there's a computer, with just a single tool. Now there is no excuse to not perform a thorough design for all projects, even the smallest ones where I might have just designed in HTML/CSS in the past.

As a web designer and developer, it's important to continuously discover and fine tune a work process that works efficiently. Overall, I was able to finish this website in a little over a week, including the learning curve for Jekyll. So I would say this was a pretty good one.

There are still some things to do of course. I am going to add a blog to the website to practice my writing, which is a skill I want to get better at. Also additional Jekyll features like pagination or comment section has not been utilized yet, which I will be adding as need arises.

Anyway, for today I'm quite excited to have this page ready and out in the world. 