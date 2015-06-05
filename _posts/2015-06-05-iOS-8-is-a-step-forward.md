---

title: iOS 8 Web Scrolling Is a Pretty Big Deal
description:  Trying to implement parallax scrolling on IOS has always been a problem. Until iOS 8.
keywords: css,html,javascript,js,web,ios,iPhone
tags: [css,html,javascript,js,web]
category: blog
layout: post

---

When iOS was developed the bright engineers at Apple faced difficult challenges when trying to display the web on a small screen. Touch events, viewports, etc are all a product (for better or worse) of trying to make the web better accessible on smaller mobile device screens. One of the biggest decisions by Apple was to __pause__ any changes made to the DOM via JavaScript during scrolling. In fact - JavaScript execution halts completely.

## Why this made sense in the prehistoric era

Back in 2007, when the first iPhone came out there was no such thing as mobile friendly websites, and a lot of websites were running performance intensive code. Given these circumstances and the environment that mobile phones were incubating in it's safe to say that it was a sane decision to stop JavaScript execution on scroll to improve performance.

## Why this doesn't make sense in 2015

I came upon this problem when I was writing an arbitrary library to handle parallax scrolling in JavaScript. I soon found out that iOS stops the JavaScript execution on __scroll__ events. So I'm just here all like F*** iOS and Apple and their shi*** OS! Making me freak out a little because there's absolutely no reason that in 2015 you should have to rebuild scrolling in JavaScript which hinders performance greatly when the hardware capability is definitely there to support native scrolling. Originally in the mobile device ecosystem, Android and IE Mobile also paused JavaScript execution. By 2011 engineers working on Android decided that the hardware was good enough to continuously fire JavaScript events during scrolling. Even IE Mobile followed suit in 2012 - which meant iOS was the only hold out.

## iOS has joined us

As of iOS 8 Apple has reinstanted firing events simultaneously along side scrolling. Parallax effects are now possible on iPhones and iPads without the need of reinventing or using a library that handles scrolling. The web is very complex and as hardware and better website standards are adopted I have great faith that more features of the mobile web will continue to improve.

Connect with Ariel on [Twitter](https://twitter.com/yerariel) & <a rel="author" href="https://plus.google.com/+ArielSal"> Google+ </a>
