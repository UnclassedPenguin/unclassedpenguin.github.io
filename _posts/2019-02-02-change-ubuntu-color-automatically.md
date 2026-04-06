---
layout: post
title: "Change Colour for Ubuntu 18.04 Splash Screen, Login and Grub [Automatically]"
author: Tyler
date: 2019-02-02
categories: Ubuntu
---

In my <a class="randomcolor" href="https://unclassed.ca/2019/01/19/change-ubuntu-color-manually/" target="_blank">previous article</a> I went over how to manually change your boot colours in an Ubuntu 18.04 OS. After going through all of it a couple times, I decided that it would be easier to change in the future if I wrote a program that did it automatically, with the only input being whatever colour you want your boot screen to be, from grub to login.
<!--more-->
I can now provide you with this script to use on your machine to easily change these colours.

To use it, <a class="randomcolor" href="https://raw.githubusercontent.com/UnclassedPenguin/scripts/master/UbuntuSplashColor.py" target="_blank" >go here</a> and copy the text to a file with a name of your choice, ending in ‘.py’.

Alternatively, use this command:

{% highlight shell%}
$ wget https://raw.githubusercontent.com/UnclassedPenguin/scripts/master/UbuntuSplashColor.py
{% endhighlight %}



After this you will need to execute the script using sudo and python3. 

{% highlight shell%}
$ sudo python3 UbuntuSplashColor.py
{% endhighlight %}

It will ask for the colour you want, give it the hex value that you would like all colours to be changed to (including the ‘#’ i.e. #1a3a41) and it will auto-magically change all of the required files and all that is left is to reboot your machine.

Please let me know if you found this little program helpful, and let me know if there is anything I can add. I also have it hosted on <a class="randomcolor" href="https://github.com/UnclassedPenguin" target="_blank">my github</a> so check me out there. 
