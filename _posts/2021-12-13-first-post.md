---
layout: post
author: tyler
title: This Is A Test
---

This is some lorem ipsum text what am I going to write about but some things I am trying to make a jekyll theme from scratch and I don't know what I am doing but I am learning and it will maybe help me one day to figure it out. 
<!--more-->
## Syntax Highlighting

### Python

{% highlight python %}
import hashlib
import requests

class Passwd():
    # Get User input
    def getPass(self):
        while True:
            password = input("Enter your Password: ")
            if password.strip() != '':
                break
            else:
                print("Please input a password.")
        return password

    # Takes the password and hashes it to SHA-1    
    def hashPass(self):
        password = self.getPass()
        hashPass = hashlib.sha1(str(password).encode('utf-8'))
        hashedPass = hashPass.hexdigest() 
        firstFive = hashedPass[0:5]
        lastBits = hashedPass[5:]
        return firstFive, lastBits
{% endhighlight %}

### Go

{% highlight go %}
package main

import (
    "fmt"
)
func daysInMonthFunc(month int, year int) (int) {
	var daysInMonth int
    if (month == 2 && (year % 4 == 0 && year % 100 != 0 ||     year % 400 == 0)) {
        daysInMonth = 29
    } else if (month == 2 && year % 4 != 0) {
        daysInMonth = 28
    } else if month == 4 || month == 6 || month == 9 || month  == 11 {
        daysInMonth = 30
    } else {
        daysInMonth = 31
    }
    return daysInMonth
}

func main() {
	var month int
	var year int
	fmt.Println("What month? (1-12)")
	fmt.Scan(&month)
	fmt.Println("What Year? xxxx")
	fmt.Scan(&year)
	daysInMonth := daysInMonthFunc(month, year)
	fmt.Println("There are", daysInMonth, "days in this month.")
}
{% endhighlight %}
