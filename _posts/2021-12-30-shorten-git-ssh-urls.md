---
layout: post
title: Shorten Git SSH URL 
author: Tyler
date: 2021-12-30
categories: Git
---

I set up my [VPS](https://m.do.co/c/d028c143320b){:target="_blank" class="randomcolor"}<!--_--> to act as a remote [Git](https://git-scm.com/){:target="_blank" class="randomcolor"}<!--_--> repository so that I can store things on there as well as on [GitHub](https://github.com){:target="_blank" class="randomcolor"}<!--_-->. In doing so I realised though that the URL can get a bit unruly. When I wanted to add a remote to one of my local repositories I had to use:<!--more-->
{% highlight shell %}
$ git remote add remotename ssh://user@10.10.10.10:8910/path/to/your/git/repo.git
{% endhighlight %}

Its not so bad, but of course we are ~~lazy~~ efficient. Wouldn't it be nice if instead of `ssh://user@10.10.10.10:8910/path/to/your/git/repo.git` you could just use `yourserver://repo.git`? Of course like most things in the developer world this is possible, I'll show you how.  

All we need to do is open up your `.gitconfig` and add a couple lines.  
{% highlight shell %}
[url "ssh://user@10.10.10.10:8910/path/to/your/git/"]
        insteadOf = yourserver://
{% endhighlight %}  

Of course, in this example replace:  

user | : your username
10.10.10.10   | : your server ip (or domain name if its configured)
8910 | : your ssh port (which definitly isn't 22 right?)
/path/to/your/git | : the path to where your git repositories sit on your server  
yourserver:// | : whatever you want to use as a shortened url

<br>
Alternatively you can use the `git` cmd to do it as well:  
{% highlight shell %}
$ git config --global url."ssh://user@10.10.10.10:8910/path/to/your/git/".insteadOf yourserver://
{% endhighlight %}


Now, after you've added the blank git repository on your server, all you need to do from the project root is:
{% highlight shell %}
$ git remote add remotename yourserver://repo.git
{% endhighlight %}
Quite a bit easier, eh?  

[Discussion](https://github.com/UnclassedPenguin/UnclassedPenguin/discussions/5){:target="_blank" class="randomcolor"}
