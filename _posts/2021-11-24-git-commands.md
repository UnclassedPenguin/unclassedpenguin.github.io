---
layout: post
title: "Github Commands Cheat Sheet"
author: tyler
image:
categories: [Github, Cheat Sheet]
featured: true
---

### Contributing to a Project

1. Fork the repository you want to contribute to

2. Clone the fork to your local machine  
	`git clone URL_of_fork`  
> i.e. `git clone https://github.com/YOURNAME/first-contributions.git`

3. cd into new directory

4. Add url of the original project as the upstream repository  
	'git remote add upstream URL_of_project`  
> i.e. `git remote add upstream https://github.com/firstcontributions/first-contributions.git`  

> `git remote -v` shows your remote repositories

5. Pull from upstream master to sync your local  
	`git pull upstream master`

6. Create new local branch (best not to work on master/main)  
	`git checkout -b NEWBRANCH`  
> `git branch` will show your local branches 

7. **Make your changes**

8. Add your changes   
	`git add -A`

9. Commit changes, be descriptive. Use current tense, not past. (Add, not added)  
	`git commit -m 'describe what you did'

10. Push to your fork  
	`git push origin NEWBRANCH`

11. Go to fork on Github, refresh, should be pull request button. Click and fill it out.   
