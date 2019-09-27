---
title: A Web Development Setup For Less Than $200
date: 2019-07-30 10:03:47.814000000 Z
categories:
- Blog
tags:
- Coding
layout: blog-post
image: https://images.unsplash.com/photo-1499872995989-56985d47da53?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ed1e81bf0e23244d68f97ca08244076&auto=format&fit=crop&w=1052&q=80
---

What's the cost of a decent coding computer in 2019? I recently purchased a Samsung Chromebook 3 for around $170, and have been experimenting to see if it can work as my primary web development setup. Will it handle everything that I need to and want to do? What are some drawbacks? Read on to find out.
<!--more-->

## Chrome OS

When you open a Chromebook, there will be a browser and not much else. Any "apps" you will find or be able to add are essentially bookmarks to web apps. For a long time, if you wanted to code there were basically two options:

1. Use a cloud IDE such as Cloud9
2. Put the Chromebook in developer mode, and install Linux via Crouton

The drawback with a cloud IDE is that you cannot work without internet connection, which would severely limit where you can code, especially with highly portable devices like Chromebooks. With the Crouton route you can have the full Linux experience, but you are taking some risks by putting the OS into developer mode. But finally, Google has given us (although still in Beta) a much better third option: Project Crostini.

## Crostini

This native Chrome OS feature which gives you a Linux container to run pretty much any Linux application, is called Project Crostini. But don't go searching for "Crostini" on your Chromebook because they don't call it that anywhere within Chrome OS. Instead, open *Settings* and search for "Linux".

{% include figure.html name="1.png" alt="Screenshot of Linux setting on a Chromebook" %}

Once you enable the option, it will take a few minutes for initial installation.

After the installation, go ahead and search for "Terminal". ...And there it is! You have a Linux Terminal.

The prompt should say `<username>@penguin:`. *Penguin*. Yup. That's the name of the Linux container (Linux logo is a penguin. Get it?). It's important to note that in this terminal, you are only seeing inside the container, which is running Debian. Initially, you are at the user home directory. If you go up a couple of levels, you will be at the container root directory which looks like a typical Linux root.

From here, you are ready to setup your development environment as you would any brand new Linux machine.
Git is installed out of the box, so you are immediately ready to clone your repositories. However neither Ruby nor Node.js comes installed. But they can be added as you would with a standard Linux system.

What about a text editor? If you use VIM like I do, then you're already set. However, all the popular editors like VS Code, Atom, Sublime Text can all be installed just as you would with a Linux.

Anything else you would install on a Linux, go ahead and give it a try on Crostini. So far I have not found any software I use that I cannot install.

The only thing to keep in mind is that the Linux container by default does not have access to Chrome OS local files. In another words, if you download any software from browser, it will go in the *Downloads* folder which is not visible from a Linux app including Terminal. You will need to move the downloaded files to your *Linux files* folder. Really this is applicable just in case you want to run the downloaded installation file from Terminal.

## My Coding Experience

First, I want to note that there are a couple of areas where I think Chromebook is *superior* than many other traditional laptops. For one, it books and wakes up extremely fast. Secondly, the battery performance is amazing. It can easily last an entire day without ever plugging in!

All the apps I have tried have worked almost flawlessly. There have been a few quirks, though nothing too serious in my mind. For example, there seems to be a keyboard shortcut conflict with Atom that does not allow me to switch window by the *alt + tab* key combination. 

Another thing I noticed was that Linux apps, including the terminal takes good 10 to 20 seconds to open up. I am not sure if this issue is specific to my Chromebook, or if it is a general issue with Chromebooks.

My blog website is made with Jekyll.


I am also doing some work on local WordPress development.

A web app project I am working on runs on the MERN stack (MongoDB, Express.js, React.js, and Node.js).
