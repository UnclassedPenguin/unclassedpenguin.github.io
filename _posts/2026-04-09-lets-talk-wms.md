---
layout: post
title: Lets Talk Window Managers
author: Tyler
date: 2026-04-09
categories: Linux
draft: false
image: assets/images/window-manager-header.png 
photoBy: Tyler
photoByURL: https://unclassed.ca/about
photoFrom:
photoFromURL:
---


I have been using Linux for over a decade now. I got started when I worked for an ISP, and the main network guy there (who seemed like a magician to me) used Debian. As I spent more time trying to glean some knowledge from him, I decided to give Linux a try.  

<!--more-->

At first I went basic. Pretty sure I just started with Ubuntu, which at the time would have been something close to [12.04](https://old-releases.ubuntu.com/releases/12.04/){:class="randomcolor" target="_blank"}<!--_-->, which used Gnome as its dekstop environment.  

I very quickly fell in love, and very quickly fell deeply into the Linux ecosystem. It wasn't long before I started experimenting. Distro hopping endlessly, and of course customizing endlessly as well. Eventually I started to ditch the heavy desktop environments when I discovered [i3wm](https://i3wm.org/){:class="randomcolor" target="_blank"}<!--_-->. I thought I had found the end all be all of graphical computing.  

I'm not gonna lie. I used a very lightly customized i3wm for probably longer than I should have. That was my main setup for the majority of my time on linux. Probably at least 7 or 8 years. Then, for whatever reason a few years ago I decided to broaden my horizons, and went searching for new and wonderful alternatives, of which there are many.  

I've tried: [i3wm](https://i3wm.org/){:class="randomcolor" target="_blank"}<!--_-->, [dwm](https://dwm.suckless.org/){:class="randomcolor" target="_blank"}<!--_-->, [awesomewm](https://awesomewm.org/){:class="randomcolor" target="_blank"}<!--_-->, [sway](https://swaywm.org/){:class="randomcolor" target="_blank"}<!--_-->, [hyprland](https://hypr.land/){:class="randomcolor" target="_blank"}<!--_-->, [niri](https://niri-wm.github.io/niri/){:class="randomcolor" target="_blank"}<!--_-->, maybe more I can't remember... 

The only one I haven't liked was dwm. I'm not a fan of the [suckless philosophy](https://suckless.org/philosophy/){:class="randomcolor" target="_blank"}<!--_--> which has always come across as elitist to me.  

As I previously stated, I loved i3wm, and have used it extensively. The next one I settled on after that was awesomewm. That became my new favorite, and I have spent a ton of time with it and have my rc.lua configured pretty much to my liking. ([dotfiles](https://github.com/unclassedpenguin/dotfiles.git){:class="randomcolor" target="_blank"}<!--_--> plug...)  

If I need to use x11 these days, it's gonna be awesome. 

Speaking of x11...I have pretty much moved away from it onto [wayland](https://wayland.freedesktop.org/){:class="randomcolor" target="_blank"}<!--_-->. Of course, loving i3, I tried Sway, which I really do like, but for someone like me who used i3 for so long, it just feels too familiar and I have been ready for change, so I rarely stick with it for too long.  

You can't look into wayland compositors without running across Hyprland. So that was my next logical choice.  

I do love Hyprland. I used it for a year or so, and got my config to a place that I was content with. I even ran it on some fairly old hardware, so I really don't think it is that heavy like some people complain about.  

My only problem with Hyprland is booting up, updating my system, realizing that Hyprland had *another* update, and now my config is broken. Then it's a matter of several hours of looking over the documentation and figuring out how to do the same thing in a different way. That happened to me about 3 times before I started thinking, "Hmmm. Maybe there's something else."  

Which brings me to the finale (as of now), and that would be Niri. Looking online you constantly see debates between Hyprland and Niri, and much of the time its people claiming once you switch to Niri you won't go back. I have to say, so far for me that has been the case.  

Niri does *nearly* everything I need it to do, and the one thing it doesn't natively support (yet), a scratchpad, I have figured out a good workaround. The only thing I ever really use a scratchpad for is to hold a terminal (and if I need more than one, I can just use screen and switch between them), and I use kitty for my terminal which has its own scratchpad, called quick-access-terminal. So I have my typical scratchpad keybinding that launches the kitty quick-access-terminal, and it completely satisfies my scratchpad needs.  

Other than that, I am completely happy with the layout and options of Niri. It takes a little bit to get used to the vertical stack instead of horizontal like every other window manager I've ever used, but it's really not any different in the end.  

Also, I set up my config once, and have yet to have a single option break. Now theres something to say about Hyprland that it is under constant development and maybe that is a good thing. It's a very active community, but I think it will be better once things stabalize and slow down a bit.  

So maybe there will be a place for Hyprland in my future, but for now, I am pretty sure I will be sticking to Niri. 

Even in Niri (and pretty much every other wm) I tend to change the keybindings to match what I learned with i3wm. Ctrl-shift-e to exit. Ctrl-Shift-q to close applications. It has just become so engrained in my muscle memory I don't want to learn other key combos.  

[Here](https://github.com/UnclassedPenguin/dotfiles/blob/master/niri/config.kdl){:class="randomcolor" target="_blank"}<!--_--> is a link if you'd like to check out my Niri config. Its fairly simple, not a ton of changes. I have it set up to use both Rofi and Fuzzel, and I changed some of the movement to match what I like from vim keybindings, such as going to the workspace below by using mod+j, which Niri provides the really nice option "focus-window-or-workspace-down". So that if you have windows in a column, it moves down the column first, but once you reach the bottom it will push you to the workspace below.  

Overall, I am just super happy with Niri and definitely see myself using it for the forseeable future. :)  

Go give them a star on [github](https://github.com/niri-wm/niri){:class="randomcolor" target="_blank"}<!--_--> to show them some love. 
