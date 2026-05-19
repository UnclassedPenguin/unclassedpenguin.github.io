---
layout: post
title: Trying Out Zsh (and Oh My Zsh)
description: Playing with Oh My Zsh.
author: Tyler
date: 2021-12-27
categories: Linux 
image: assets/images/zsh-screenshot.png
photoBy: Tyler 
photoByURL: https://unclassed.ca/about
photoFrom: unclassed.ca
photoFromURL: https://unclassed.ca/about
---



For the longest time I haven't even considered what shell I have been using. I run Ubuntu (currently 20.04) so my default shell has always been Bash, which has never bothered me. I was browsing [GitHub](https://github.com) the other day and came across the repository for [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) and I decided to look into it a bit more, since I had heard about it before.   
<!--more-->

> tl;dr Zsh is an interesting alternative to Bash, and well worth looking into if you feel like trying out something different.  

Oh My Zsh isn't a shell on its own. According to their GitHub page they are "A delightful community-driven framework for managing your zsh configuration." Its a framework that is built on top of the shell Zsh, or Z Shell, which is an alternative to the other shells such as [Bash](https://www.gnu.org/software/bash/), [Fish](https://fishshell.com/), [Dash](https://wiki.archlinux.org/title/Dash), [Csh](https://en.wikipedia.org/wiki/C_Shell), and more.  <!--_-->

I installed zsh about a week ago on my laptop. It was as simple as:  
{% highlight shell %}
$ sudo apt install zsh
{% endhighlight %}
After that, you are still running Bash, or whatever is your current default shell (to find out what you are currently using `$ echo $SHELL` ) but you can now type `zsh` into your current shell to launch Zsh.  

What made me finally decide to try using Zsh is that it is an expansion of bash, so it can do basically everything bash can do, plus some. Using Oh My Zsh also helps by allowing easier configuration. Oh My Zsh can be installed after you install zsh using this command:  
{% highlight shell %}
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"  
{% endhighlight %}
This will set up everything for you, and you can access the files in `~/.oh-my-zsh`. The first thing I did was try to decide on a theme. I ended up using a [custom theme](https://github.com/UnclassedPenguin/dotfiles/blob/master/tyler.zsh-theme) which is a bit of a mishmash of a few themes with some custom color tweaks. I added this to the `~/.oh-my-zsh/custom/themes/` folder, and then edited the `~/.zshrc` file to apply the theme. Changing the line `ZSH_THEME="robbyrussell"` (the default theme, that Robby Russell uses :p) to `ZSH_THEME="tyler"` (the non-default theme, that Tyler uses) since I named my theme `tyler.zsh-theme`.  

Now I have been using zsh for about a week, and I am quite enjoying it. I like that it looks quite a bit different. And other than that, I haven't really noticed many issues. Although a few odd things have popped up that I haven't been able to figure out. For example, This site is a [Jekyll](https://jekyllrb.com) site running on GitHub Pages. I work on the site locally however, and often while I am doing that I will use the development server to view the site. I do this by opening a terminal (I like to use a terminal in scratch since I am using [i3wm](https://i3wm.org/)) and go to the directory where I am working on my site, for me `~/unclassed.ca/`, and I execute the command `bundle exec jekyll serve --livereload`. This allows me to view my site on http://localhost:4000 and will automatically reload whenever I save a file (besides _config.yml<!--_-->, if you edit that file you have to restart the server). However, when I try this using zsh, I get errors. I haven't figured out yet what is going on. Something about permissions, or not having the right folders added to $PATH. I am still working on it. Other than that though, I haven't had any issues, and I am quite enjoying it.  

If you are bored and feel like messing around with something, maybe give Zsh a try on your computer, and [let me know](https://github.com/UnclassedPenguin/UnclassedPenguin/discussions/2) what ya think. 

#### Update:
I figured out what was wrong with my setup. I was just missing a few folders from my path. I looked at my .bashrc and found a few lines that had been added:  
{% highlight shell %}
# Install Ruby Gems to ~/gems 
export GEM_HOME="$HOME/gems" 
export PATH="$HOME/gems/bin:$PATH" 
 
 
export NPM_CONFIG_PREFIX=~/.npm-global 
export PATH=$PATH:~/.npm-global/bin
{% endhighlight %}

After adding these to my .zshrc, everything seemed to be working! Hoorah!
