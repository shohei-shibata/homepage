---
title: Why I use VIM
date: 2019-11-11 14:25:11.032000000 Z
categories:
- Blog
tags:
- Featured
- Coding
layout: blog-post
---

Why would anyone want to use VIM? The text editor is the place where a web developer spends most of his or her time, and so we definitely want it to be efficient and stress-free. And there are a lot of great options out there, so why would anyone want to choose the most primitive, barebones looking option? <!--more--> 

{% include figure.html name="vim.png" alt="VIM" caption="VIM startup screen" %}

VIM lacks any graphical interface. I imagine many people might not even know how to exit out of the thing if opening a file in VIM by accident! Each action is performed by typing in commands which you must memorize, and I can totally see how that can scare off a lot of people. However if you are patient and spend the time to learn how to use VIM, you will be hugely rewarded. The speed and efficiency of keyboard-based navigation makes me very productive. I love the simplicity of having only the text file that I am editing. I think that promotes better focus. Also, it's a tremendously satisfying thing to learn the language of VIM, because as you use it more, you will learn more commands which continuously improves your efficiency even more.

## The basic commands

OK, so even though you might hear a lot about the steep learning curve of VIM, I think it's actually not that bad. It's a lot like learning a new language. It will take years and years to learn all the words in any language, but you only need to learn a tiny fraction of the to get by in 90% of situations you will face. With VIM, you can also start simple by just learning a few commands, like

* `h j k l` keys will move the cursor left, down, up, right, respectively.
* Typing `i` will get you in insert mode. This let's you type. 
* Hit `esc` to get out of insert mode.
* `:w` and Enter will save the file.
* `:q` exits you out of VIM.
* Oh, and `u` will undo last action, in case you made a mistake!  


At this point, you're going to be pretty slow. Evey time you want to move cursor, you will have to think which key you need to press. But it just takes a little getting used to. So you should consciously and consistently spend a little bit of time in VIM. Maybe not in your big coding project, but maybe you need to edit a configuration file. That would be a great opportunity. Take notes in VIM. Soon you will be comfortable with the basics. 

## Expanding your command set

From there, you can start slowly adding to your repertoire of commands. This is where it starts to get real fun. You'll start to find moves that are way easier in VIM than with a full IDE.

* Instead of moving the cursor one letter at a time, hit `w` to skip forward by a word. `b` will skip backward.
* Replace an entire word instantly by typing `cw`. That will delete the word and put you in insert mode.
* Or, replace three words by typing `c3w`.  


Combining commands like this, is where things start to get very cool! When you are editing a file and you think of the perfect key combination to do what you need to do... makes me feel like a martial arts master! 

You will also want to get better at navigating between files. 

* `:e` followed by file name let's you switch to that file.
* `:E` will open the Explorer, which lets you browse through folders to find the file you want to edit.
* `ctrl + o` will instantly switch to the last file you opened.   


There is so much more that you can learn. I am just a few months into using VIM extensively so I am discovering new commands constantly, and I just have tons of fun learning and getting better! 

## Start coding immediately

The other benefit of VIM is that it comes installed in Linux and Mac (In Windows you can get the [gVim](https://www.vim.org/download.php#pc)). So even if I am on a new computer, I only need to clone the repo and I am ready to code. Whether I am starting up the computer, or switching between projects, I can start coding so quickly because the only thing I have to open is the CLI. 

## Why not give it a try?

It's really not as intimidating as some may say, and I think there's a good chance you will enjoy learning it and boost your coding efficiency like I did. The key is patience. 

I'll leave you with [this video](https://www.youtube.com/watch?v=QNAXa0W4OFg). This is definitely not me, but it's amazing what some people can do with it!
