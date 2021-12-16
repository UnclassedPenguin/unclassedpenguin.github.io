---
layout: post
title: "Change Colour for Ubuntu 18.04 Splash Screen, Login and Grub [Manually]"
author: tyler
image: assets/images/ubuntu-logo-768x433.jpg
date: 2019-01-19
categories: code Ubuntu
---

I use Ubuntu 18.04 on my laptop, and recently wanted to change the colours that show up when you are booting. It usually shows as the default purple Ubuntu colour, and I wanted to change it to my own, in this case #1A3A41.

I had to scrounge around stackoverflow and other random forums to find the answers, so I decided to write this post and put it all in one place.

There are three stages that we need to change. The Ubuntu login page, splash screen, and then the grub loading screen.

First let’s find the values we will need for our new colour. I found a website that was very helpful for [converting colours](https://convertingcolors.com).

Go there and enter the colour you want to use. The formats we are interested in are RGB and RGB Percent.

For our colour #1A3A41 the RGB values are:

RGB	        26, 58, 65   
RGB Percent	10%, 23%, 25%

The RGB value is used for ubuntu-logo.grub and the RGB Percent is used in the ubuntu-logo.script, however you have to enter it in as a decimal form of its self. So for us, its 0.10, 0.23, 0.25. The login page uses css so the plain hex colour code will be used there.

Lets begin now that we have everything we need. Open a terminal and we can get started. First we will edit the file to change the login screen colour. Always make sure when editing any system files to first create a backup. Change your directory, and copy the file to a new one of the same name, including a ‘.old’ on the end as a backup. 

{% highlight shell %}
1. $ cd /usr/share/gnome-shell/theme/ubuntu.css
2. $ sudo cp ubuntu.css ubuntu.css.old
{% endhighlight %}

Now use your favorite text editor (with root privileges) to open the file ‘ubuntu.css‘(/usr/share/gnome-shell/theme/ubuntu.css) and find the following lines. It is helpful to search for the term “lockDialog” to find it easily.

{% highlight shell %}
#lockDialogGroup {
  background: #2c001e url(resource:///org/gnome/shell/theme/noise-texture.png);
  background-repeat: repeat; }
{% endhighlight %}

Now we are going to edit this using your own hex colour and it should end up looking something like this:

{% highlight shell %}
#lockDialogGroup {
  background: #1a3a41;
  background-repeat: repeat; }
{% endhighlight %}

Moving on, we will create backups for both the ‘ubuntu-logo.grub’ file (this file is responsible for changing the colour during the grub boot screen) and the ‘ubuntu-logo.script‘ file (this file is responsible for changing the colour during the Ubuntu splash screen that follows the grub boot screen). 

{% highlight shell %}
1. $ cd /usr/share/plymouth/themes/ubuntu-logo
2. $ sudo cp ubuntu-logo.grub ubuntu-logo.grub.old
3. $ sudo cp ubuntu-logo.script ubuntu-logo.script.old
{% endhighlight %}

Again, edit them using your favorite text editor, starting with the ‘ubuntu-logo.script’  file. Look for these lines:

{% highlight shell%}
    # Previous background colour
    # #300a24 --> 0.19, 0.04, 0.14
    # New background colour
    # #2c001e --> 0.16, 0.00, 0.12
    #
    Window.SetBackgroundTopColor (0.16, 0.00, 0.12);     # Nice colour on top of the screen fading to
    Window.SetBackgroundBottomColor (0.16, 0.00, 0.12);  # an equally nice colour on the bottom
{% endhighlight %}

We will need to edit the values in parentheses following both the Window.SetBackground colours. Here we will use the RGB Percent values we found earlier.

Change it to look something like this:

{% highlight shell%}
    # Previous background colour
    # #300a24 --> 0.19, 0.04, 0.14
    # New background colour
    # #2c001e --> 0.16, 0.00, 0.12
    #
    # Personal Color
    # #1a3a41 --> 0.10, 0.23, 0.25
    #
    Window.SetBackgroundTopColor (0.10, 0.23, 0.25);
    Window.SetBackgroundBottomColor (0.10, 0.23, 0.25);
{% endhighlight %}

Now we will edit the ‘ubuntu-logo.grub’ file. This is a small file, and we just need to change the numbers in the first line. Use the RGB values from earlier, and add an extra zero (I am not sure if this extra zero is necessary, feel free to do some experimenting and let me know what you find out). It will end up looking something like this, with your own values of course:

{% highlight shell%}
    if background_color 26,58,65,0; then
      clear
    fi
{% endhighlight %}

Now we need to execute a couple commands to let the computer know we changed these files.

{% highlight shell%}
1. $ sudo update-grub
2. $ sudo update-initramfs -u
{% endhighlight %}

Now finally you can reboot your computer and see that all of your colours have changed. My favorite part of Linux is that it is much more customizable than other well known OSs. 
