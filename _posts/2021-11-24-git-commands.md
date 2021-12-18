---
layout: post
title: "Git Commands Cheat Sheet"
author: tyler
image:
categories: [Github, Cheat Sheet]
---
### Branches

- Check local branches   
	`$ git branch`

- Create new branch  
	`$ git branch new-branch`

- Switch to new branch  
	`$ git checkout new-branch`

- Create and Switch to new branch in one command  
	`$ git checkout -b new-branch`

- To merge changes made in new-branch into main first change to main  
	`$ git checkout main`

- Then merge  
	`$ git merge main`

- Once everything is checked and running fine, delete the branch  
	`$ git branch -d new-branch`	

### Contributing to a Project

- Fork the repository you want to contribute to

- Clone the fork to your local machine  
	`$ git clone URL_of_fork`  
> i.e. `$ git clone https://github.com/YOURNAME/first-contributions.git`

- cd into new directory

- Add url of the original project as the upstream repository  
	`$ git remote add upstream URL_of_project`  
> i.e. `$ git remote add upstream https://github.com/firstcontributions/first-contributions.git`  

    > `$ git remote -v` shows your remote repositories

- Pull from upstream master to sync your local  
	`$ git pull upstream master`

- Create new local branch (best not to work on master/main)  
	`$ git checkout -b NEWBRANCH`  
> `$ git branch` will show your local branches 

- **Make your changes**

- Add your changes   
	`$ git add -A`

- Commit changes, be descriptive. Use current tense, not past. (Add, not added)  
	`$ git commit -m 'describe what you did'`

- Push to your fork  
	`$ git push origin NEWBRANCH`

- Go to fork on Github, refresh, should be pull request button. Click and fill it out.   


