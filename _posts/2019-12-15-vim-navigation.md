---
title: Navigating between files in Vim
date: 2019-12-15 00:00:00 Z
categories:
- web-development
tags:
- Vim
layout: blog-post
---

When I chose to start using Vim instead of GUI-based editors, I figured one drawback was going to be navigating between multiple files, or working on multiple files at once. Well I was wrong. It's very easy to work with multiple files in Vim, and it's pretty awesome to be able to navigate files quickly without a mouse! 

<!--more--> 

Here are some basic commands I've learned to help me navigate my way through multiple files in Vim.

## The Jump List

Each time you open a new file or jump to a new location within the same file, Vim records the locations in the "Jump List". The jump list can be viewed by the command `:jump`. 


{% include figure.html name="jumplist.png" alt="Jump List" caption="The jump list" %}

You can quickly go to any of those locations by hitting `ctrl + o` or `ctrl + i` in normal mode. `ctrl + o` takes you to the previous location in the jump history (e.g. last file you opened), and `ctrl + i` takes you forward in the jump history. 

If you have just a few files open, this is definitely the fastest way to flip through the files. 

## The Buffer

Each loaded file is stored as a buffer in Vim. To view what files you have loaded, use the command `:ls`. 

{% include figure.html name="bufferslist.png" alt="Buffers List" caption="The buffers list" %}

You can see that each line starts with a number. That's the buffer number for that file. To go to open buffer 1, type `:b1` and so on.

## Split View

One thing I love about Vim is the uncluttered view, with the only thing in front of me being the one text file I am editing. However sometimes it is much better to have two files side-by-side. When I am writing a test, for example, it's nice to be able to view the code that I am trying to test. The split screen view is perfect for this.

{% include figure.html name="splitview.png" alt="Split View" caption="The split view" %}

Instead of opening a new file by the `:e <filename>` command, you can use `:vsp <filename>` to open the new file in a split screen to the side, or `:sp` to add a split screen below. To move the cursor between the open files, use `ctrl + w w`. To close a split window, go to that window and type `:q`.

## Tab View

You can also open files in tabs. `:tabnew <filename>` will open a new file in a new tab. `:tabn1` will take you to the first tab, `:tabn2` for the second tab, and so on. You can also use `:tabn` to go to the next tab, and `:tabp` for the previous tab.

{% include figure.html name="tabview.png" alt="Tab View" caption="The tab view" %}

Personally, I find that the other three commands (jump, buffer, split) are sufficient for me in most any situation. One unique thing about the tab view though, is that you are basically creating a new instance of Vim in each tab. If that is what you need then the tab view is what you want to use.

## Conclusion

By getting familiar with these commands, it's possible to efficiently work with multiple files in Vim. Over time, you can develop your way of using these commands, and possibly also create some custom `.vimrc` keybindings to make you even faster. 
