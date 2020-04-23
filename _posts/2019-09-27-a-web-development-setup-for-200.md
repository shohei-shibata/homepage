---
title: A Web Development Setup For $200
date: 2019-09-27 10:03:47 Z
categories:
- Blog
tags:
- Coding
layout: post
image: 
---

What's the cost of a decent coding computer in 2019? I recently purchased a Samsung Chromebook 3 for around $170, and have been experimenting to see if it can work as my primary web development setup. Will it handle everything that I need to and want to do? What are some drawbacks? Read on to find out.
<!--more-->

{% include figure.html name="chromebook-open.jpg" alt="My Chromebook" caption="My Samsung Chromebook 3" %}

## Chrome OS

When you open a Chromebook, there will be a browser and not much else. Any "apps" you will find or be able to add are essentially bookmarks to web apps. For a long time, if you wanted to code there were basically two options:

1. Use a cloud IDE such as Cloud9
2. Put the Chromebook in developer mode, and install Linux via Crouton

The drawback with a cloud IDE is that you cannot work without internet connection. To me that's a huge negative especially with highly portable devices like Chromebooks. With the Crouton route you can have the full Linux experience, but you are taking some risks by putting the OS into developer mode. But finally, Google has given us (although still in Beta) a much better third option: Project Crostini.

## Setup

This native Chrome OS feature which gives you a Linux container to run pretty much any Linux application. But don't go searching for "Crostini" on your Chromebook because they don't call it that anywhere within Chrome OS. Instead, open *Settings* and search for "Linux".

{% include figure.html name="linux.png" alt="Screenshot of Linux setting on a Chromebook" %}

You will see an option for "Linux (Beta)". Once you enable the option, it will take a few minutes for initial installation.

After the installation, go ahead and search for "Terminal", and open it. ...And there it is! You have a Linux Terminal.

{% include figure.html name="terminal.png" alt="Terminal" %}

The prompt should say `<username>@penguin:`. *Penguin*. Yup. That's the name of the Linux container (Linux logo is a penguin. Get it?). It's important to note that in this terminal, you are only seeing inside the Linux container, which is running Debian. By default, Linux apps only have access to the files and folders inside the "Linux files" folder.

{% include figure.html name="linux-files.png" alt="Linux Files Folder" %}

From here, you are ready to setup your development environment as you would any brand new Linux machine.
Git is installed out of the box, so you are immediately ready to clone your repositories. However neither Ruby nor Node.js comes installed. But they can be added as you would with a standard Linux system.

What about a text editor? If you use VIM like I do, then you're already set. However, all the popular editors like VS Code, Atom, Sublime Text can all be installed just as you would with a Linux. 

Anything else you would install on a Linux, go ahead and give it a try on Crostini. So far I have not found any software I use that I cannot install.

## My Coding Experience

First, I want to note that there are a couple of areas where I think Chromebook is *superior* than many other traditional laptops. For one, it books and wakes up extremely fast. Secondly, the battery performance is amazing. It can easily last an entire day without ever plugging in!

All the apps I have tried have worked almost flawlessly. There are a few minor annoyances, such as that some Linux apps can be a bit slow to open, including the terminal. I am not sure if this issue is specific to my Chromebook, or if it is a general issue with all Chromebooks, but it takes maybe around 15 seconds for terminal to open, and similar for Atom. However, GIMP (the image editing app) loads up quickly in a couple of seconds.

The final thing to note is that the storage size is very limited on a extremely budget-friendly Chromebook like mine, at only 16GB. There are plenty of choices out there for Chromebooks with more storage. However, I did not bother with them because for $30, I can buy a microSD card with 128GB of additional storage. That is way more storage per dollar than paying for a larger internal SSD at the time of buying a Chromebook.

So really, I have not seen any limitations coding on a Chromebook. You can code offline using Linux apps. These things cost a fraction of a MacBook, they are highly portable and the battery lasts all day. I think this is a game-changer.
