---
layout: post
title: AwesomeWM Scratchpad
author: Tyler
date: 2025-03-19
categories: Linux
image: assets/images/awesomewm-scratchpad.png
photoBy: Tyler
photoByURL: https://unclassed.ca/about
photoFrom: unclassed.ca
photoFromURL: https://unclassed.ca/about
---


I have recently switched to [AwesomeWM](https://awesomewm.org){:class="randomcolor" target="_blank"}<!--_--> after using [i3wm](https://i3wm.org){:class="randomcolor" target="_blank"}<!--_--> for quite awhile. I was just bored mainly, and wanted to give it a go. After a month or two on it I have to say I am quite fond of it. I like the amount of configuration. Although it has taken a bit to get used to using lua as the configuration language. One thing I missed from i3wm though was the scratchpad. So I spent a few hours trying to figure it out, I'll let ya know what I came up with.  
<!--more-->

First things first, this isn't quite as powerful as i3wm's scratchpad. The only thing I ever really used the scratchpad for was to put a terminal in the background, so that's all I aimed to do in awesome. I don't need to be able to put __any__ window into scratchpad. I just like having quick access to a terminal where I can have a program open such as my music (cmus), and have the ability to quickly pull it up (to change a song or such) and then hide it again.  

So that was my goal. Bring up a terminal, hide a terminal. Simple, right?  

I used ai to help me come up with this solution, and after awhile of poking and prodding for different solutions finally got one that worked. So, there are 3 parts that need to be added to your awesomewm config file.  

1. The function that handles the window
2. The rules for that window
3. A key combination to toggle the window

## The Function
The first part we need to create is a function that handles the three possible scenarios there can be for a scratchpad.    

1. The terminal is visible, in which case it should hide it.
2. The terminal is hidden, in which case it should show it.
3. The terminal isn't open, in which case it should launch it.

So, to do that I added to my `~/.config/awesome/rc.lua`:

{% highlight lua %}
-- Scratchpad
-- This is for the scratchpad, that opens a urxvt window that can be brought forward and hidden into the background.
-- There is a rule set further on, and a key binding set as well. Search "Scratchpad" to find them.

-- Function to toggle the scratchpad
local function toggle_scratchpad()
  local scratchpad_terminal = nil
  for _, client in pairs(client.get()) do
    if client.class == "URxvt" and client.instance == "scratchpad" then
      scratchpad_terminal = client
      break
    end
  end

  if scratchpad_terminal then
    if scratchpad_terminal.hidden then
      -- If terminal is hidden, show it
      scratchpad_terminal.hidden = false
      client.focus = scratchpad_terminal
    else
      -- If terminal is visible, hide it
      scratchpad_terminal.hidden = true
    end
  else
    -- If terminal doesn't exist, create it
    -- This is also where you can change the default size, just change geometry
    awful.spawn("urxvt -name scratchpad -geometry 120x35", false)
  end
end

-- End Scratchpad

{% endhighlight %}

I guess at this point I should mention that my main terminal is [URxvt](https://wiki.archlinux.org/title/Rxvt-unicode){:class="randomcolor" target="_blank"}<!--_-->. So, the line that launches the terminal is near the end where it says `awful.spawn("urxvt -name scratchpad -geometry 120x35", false)`. The important part here is that it names the window "scratchpad". That makes it identifiable so it can be manipulated by the window manager. In theory, you should be able to do this with other terminals as well, if you can name them. Maybe something like `"gnome-terminal --title='scratchpad'"`.  

Another important note to make, is that the same line is also where you can change the default size of the terminal. Just change the numbers after `-geometry`.  

## The Rules

Now we need to add the rules for this window. It should always show on top, no taskbar, should be a floating window, etc. To do this, search your `rc.lua` for "Rules" And you should find a bit of code that looks like:

{% highlight lua %}

-- Rules to apply to new clients (through the "manage" signal).
awful.rules.rules = {


(There should be a bunch of stuff in here)


}

{% endhighlight %}

And we just need to add a rule for scratchpad window, so just add it to the top, so it looks something like:  

{% highlight lua %}

-- Rules to apply to new clients (through the "manage" signal).
awful.rules.rules = {

    -- Scratchpad rule
    { rule = { class = "URxvt", instance = "scratchpad" },
      properties = {
        ontop = true,
        sticky = true,
        skip_taskbar = true,
        focus = true,
        floating = true,
        titlebars_enabled = false,
      },
      callback = function(c)
        awful.placement.centered(c, { honor_workarea=true, honor_padding=true })
      end,
    },

    (THE REST OF YOUR RULES HERE)

}

{% endhighlight %}

Now, if you aren't using URxvt like I am, you would need to change the "class". You can use xprop to find out the window class. 

## The Keybinding

Now all thats left is to add a keybind that can actually activate the scratchpad. Scroll to the section of your rc.lua where your keybinds are, and add:

{% highlight lua %}

    -- Scratchpad keybinding
    awful.key({ modkey },            "a", toggle_scratchpad,
              {description = "toggle scratchpad", group = "custom" }),

{% endhighlight %}

In this case, I am using modkey+a to toggle the scratchpad, although this is just my setup. You can change it to whatever you like.   

Now, you should be able to save the config file, restart awesomewm and use the keybind to launch your scratchpad!  

## Troubleshooting

Now, for me, I ran into a strange error where the window was using some of my config from `~/.Xresources`, but not others. It was a really strange issue that took me awhile to figure out. What it turned out to be is that because it has the name "scratchpad", you have to make sure that in your Xresouces all of the paramaters are set to *.whatever. <!--*--> So for me, I had 

{% highlight shell %}
    urxvt.font:        xft:monospace:pixelsize=18
    urxvt.letterSpace: -2
    urxvt.scrollBar:   false

{% endhighlight %}

I needed to change this to:

{% highlight shell %}
    *.font:        xft:monospace:pixelsize=18
    *.letterSpace: -2
    *.scrollBar:   false
{% endhighlight %}
<!--*-->
And after that, everything worked fine!  

## Conclusion

So far I have been really happy with this scratchpad. It has shown a few issues where if you mess around with the windows and fullscreen and maximize and unfullscreen and then try to pull up the scratchpad it doesn't come to the foreground. You can see it coming up in the background, but doesn't go on top of other windows. I can usually fix it by swapping to a blank workspace and toggling the scratchpad and making it fullscreen and then unfullscreen it and then it tends to go back to working. Who knows. But, so far, for me it has satisfied my needs of having quick access to a terminal that I can hide and pull up. My music can now happily play away in a hidden terminal.  
