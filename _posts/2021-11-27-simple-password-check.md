---
layout: post
title: "Simple Password Check"
author: tyler
categories: [ Security ]
---

[HaveIBeenPwned](https://haveibeenpwned.com/) is a site that you can type in your email and check if you have been part of any leaks that have happened on the internet. 
  
 
Checking your email is of course one thing, but what about passwords? There is a site that you can enter your password and check if it has shown up in any of the breaches, but no matter how trustworthy a person or site is, I think its a terrible idea. Luckily there is a way around this that you can check your password without giving it away to anyone. If you run linux, its as easy as just a few commands typed into your terminal. Here are the steps to safely check if your password has been exposed in any data breaches. Credit to [Troy Hunt](https://www.troyhunt.com/) for creating the Have I Been Pwned site, as well as [Mike Pound](https://github.com/mikepound) for pointing this out on the [Computerphile](https://www.youtube.com/watch?v=hhUb5iknVJs) YouTube channel. Lets check your passwords now. 

1. Open a terminal
2. We need to hash your password to SHA-1 to check it against the database (replace 'password' with your own password)  

`$ echo -n 'password' | sha1sum`  

This will return a string like this:  

`5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8  -`  

3. Take the first 5 characters of that string, in this case 5baa6, and we will use it with the Have I been Pwned API to get back a list of matching hashes. I like to pass this into a text file, which we can search after.  
  
`curl https://api.pwnedpasswords.com/range/5baa6 > pass.txt`  

4. Now we are going to take the string from earlier, minus the first five characters and use grep to search the text file to see if we have a match.  

`grep -i "1e4c9b93f3f0682250b6cf8331b7ee68fd8" pass.txt`  


If this returns with a line like this:  
  
`1E4C9B93F3F0682250B6CF8331B7EE68FD8:3861493`  
 
That means that your password has been found however many times show up after the colon. In this case, obviously, the password "password" is a terrible idea. It shows up in the database almost 4 million times.  

Hope this helps. Keep those passwords safe!
