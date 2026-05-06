---
layout: post
title: Dwm Hardware Comparison
description: Comparing dwm on different hardware.
author: Tyler
date: 2026-04-21
categories: Linux, WM
draft: false
image: assets/images/dwmlogo-green.png
photoBy: Tyler
photoByURL: https://unclassed.ca/about/
photoFrom: unclassed.ca
photoFromURL: https://unclassed.ca/about/
---


In my [last post]({% post_url 2026-04-09-lets-talk-wms %}){:class="randomcolor" target="_blank"}<!--_--> I was talking about different window managers, and I mentioned that I had not given [dwm](https://dwm.suckless.org/){:class="randomcolor" target="_blank"}<!--_--> much of a chance. I decided to change that; so for the last week I have been using it, customizing it, and trying it out on different hardware. Let's see what I have learned.<!--more-->


Firstly, I have heard that dwm is supposed to be one of the lightest window managers out there, so I decided to test that out by running it on some old and new(er) hardware to see how it compares. 

For the old hardware, I have a [Samsung NF210] which is a netbook from 2010 with an Intel Atom N550 (ooh baby. Dual core, 1.5Ghz *beast*) and an *impressive* 2GB of ram. Now despite my sarcasm, I actually really love this machine. It is a great size (at least for my moderate sized hands), has a decent keyboard on it, and has always had great battery life. (On a side note, if I could have this size machine, with a modern screen---read, smaller bezels---and modern cpu/ram it would be a dream machine.)

For the "new" hardware, I am going to be using my [Thinkpad x280], that admittedly isn't all that new being released in 2018, but it has enough power to put it in an entirely different category from the NF210, and is currently my daily driver in 2026.

<h3 class="randomcolor blogsubtitle">The Setup</h3>

I started by picking an operating system for the netbook, which had to be something as minimal as the window manager I was targeting, so I landed on [Arch]. It worked out because I already had it on my x280 as one of the three operating systems I was tri-booting: Debian, Arch, and Gentoo. So that gave me the ability to compare evenly.

For my tests I decided I would boot up the computers, log in to the TTY, and run [htop] there, monitoring the cpu and ram usage as best I could. That gives a base line to compare to, afterwards we can launch dwm and use [st] to run a single instance of htop and collect the cpu and ram usage there, and it should give us a fair idea what dwm is using. It won't be perfect because I'll be running a single instance of st as well, but I'm sure that amount of ram is negligible. 

So thats what I did! Here are the results:

| Machine | Scenario | Ram(MB) | CPU Idle (%) |
|:--------|:--------|:-------:|:------------:|
| Netbook | Baseline TTY | 185 | 2.5% |
| Netbook | dwm + st | 230 | 9.5% |
| x280 Arch | Baseline TTY | 285 | 1.5% |
| x280 Arch | dwm + st | 360 | 2.0% |
| x280 Gentoo | Baseline TTY | 380 | 1.5% |
| x280 Gentoo | dwm + st | 438 | 2.0% |

Just for fun I decided to test this on my [Gentoo] install on my x280 as well, and in the process learned that it appears that I have a bloated Gentoo install. Its base ram was significantly higher than the arch installs. 

Now from this data we can pretty confidently say the ram usage of dwm, but the cpu usage was a little bit harder to pin down so it is only really a rough estimate.

| Machine | dwm Ram Usage(MB) | dwm CPU Usage (%) |
|:--------|:-----------------:|:-----------------:|
| Netbook | 45 | ~7 |
| x280 Arch | 75 | ~0.5 |
| x280 Gentoo | 58 | ~0.5 |

The netbook definitely took a hit in the cpu, but interestingly it had the lowest ram usage of any of them. Now, I'd consider anything under 100MB to be pretty usable. Considering the netbook has 2GB of ram, and it is only using ~0.02% for the window manager. I think I can live with that. 

<h3 class="randomcolor blogsubtitle">The Conclusion</h3>

So, to conclude my little experiment: I think that dwm is the absolutely perfect window manager on old hardware that is a little long in the tooth and needs every advantage it can get---which is pretty much the conclusion I was expecting to come to. However, what I didn't see coming is that I actually really have enjoyed dwm on my thinkpad as well. To the point that I nuked my Debian and Arch partitions, combined them, installed a new Gentoo partition using [OpenRC], and have installed only dwm on it for any graphical display. 

In my last post, I raved about niri and dismissed dwm; yet here I am raving about dwm. I'm going to be leaving it on my main computer to play around with---at least a little while longer. 


<!--links-->
[Samsung NF210]: https://www.trustedreviews.com/reviews/samsung-nf210
{:class="randomcolor" target="_blank"}
<!--_-->

[Thinkpad x280]: https://www.lenovo.com/ca/en/p/laptops/thinkpad/thinkpadx/thinkpad-x280/22tp2tx2800
{:class="randomcolor" target="_blank"}
<!--_-->

[Arch]: https://archlinux.org/
{:class="randomcolor" target="_blank"}
<!--_-->

[htop]: https://github.com/htop-dev/htop
{:class="randomcolor" target="_blank"}
<!--_-->

[st]: https://st.suckless.org/
{:class="randomcolor" target="_blank"}
<!--_-->

[Gentoo]: https://www.gentoo.org/
{:class="randomcolor" target="_blank"}
<!--_-->

[OpenRC]: https://wiki.gentoo.org/wiki/OpenRC
{:class="randomcolor" target="_blank"}
<!--_-->
