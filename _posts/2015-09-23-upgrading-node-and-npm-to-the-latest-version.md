---

title: Upgrading Node to the Latest Version
description:  How to upgrade Node to the latest version using NPM.
keywords: css,html,javascript,js,web,linux
tags: [nodejs,npm,css,html,javascript,js,web]
category: blog
layout: post

---

I recently ran into a project that involved me using the current version of node. No worries I could just download the latest image from nodejs.org - but I figured there has to be a simpe way.

Turns out there was - using NPM. To upgrade your local nosejs version using npm do the following:

```sh
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

NPM might give you a warning to use the force command - if it does use: 

```sh
sudo npm cache clean --force
```

It's quite nice that you can upgrade Node.js right from npm;  it's like Inception...or something.

Connect with Ariel on [Twitter](https://twitter.com/yerariel) & <a rel="author" href="https://plus.google.com/+ArielSal"> Google+ </a>
