---

title: Mordernizr and Web Development
description: Introduction to modernizr for web developers. Modernizr is a great tool to provide an alternative browsing experiene to your website viewers.
tags: [css,html,javascript,js,web]
keywords: css,html,javascript,js,web,modernizr,web,development
category: blog
layout: post

---

If you're a Web Developer then you probably know that one of the biggest issues is the lack of a standard between browsers and HTML/CSS support.

And although HTML5/CSS3 use has grown increasingly among web designers, this issue has yet to be addressed properly, and support from some vendors is inexistent.

Lately, I've been using Modernizr to provide an alternative experience for __browsers that don't support CSS3 properties__ , and it makes development much easier.

## How it works

To setup Moderizr, download the file from [this page](http://modernizr.com/). Then, on your site's head tag, add a link to the file:

`<script src="js/modernizr-1.0.min.js"></script>`

Then include the class "no-js" on your html tag:

`<html class="no-js">`

__Why add this tag?__

Because if javascript isn't on then Modernizr will not work (and probably a lot of other features in your site wont work either)
, so it's good to have a fall back just incase.

if javascript is indeed enabled, then once the page is loaded that class will be replaced dynamically and will look something like this:

`<html class="js canvas canvastext geolocation rgba hsla no-multiplebgs borderimage borderradius boxshadow opacity no-cssanimations csscolumns no-cssgradients no-cssreflections csstransforms no-csstransforms3d no-csstransitions  video audio cufon-active fontface cufon-ready">`

__what is this?__

In this case the page was opened in Firefox 3.5 and it doesn't support multiple backgrouns, css gradiants, or css transforms. Therefore, Modernizr outputs `"no-multipebgs"`, `"no-cssgradients"`, and `"no-csstransforms"`. On the other hand it does support `canvas` and `border-radius`. So basically Modernizr puts up a list of what is and is not supported by the browser.

__How to use this treasured information?__

without Modernizr your CSS would look like this:

```css
#nice {
    background: url(background-one.png) top left repeat-x,
    url(background-two.png) bottom left repeat-x;
}
```

and with Mordernizr it would instead look like :

```css
#nice {
    background: url(background-one.png) top left repeat-x;
}
.multiplebgs #nice {
    background: url(background-one.png) top left repeat-x,
    url(background-two.png) bottom left repeat-x;
}
}
```

Depending on browser support with modernizr you have a fall back to work with.

__javascript__

You can also detect features using Modernizr in your JavaScript, using this syntax:

 ```JavaScript
 if (Modernizr.geolocation){

 }
 ```

 __To wrap things up__

 In a perfect world there would be one standard in browsers / Html and CSS3 support but we don't live in a perfect world. But
 Modernizr is a tool that helps bridge the gap with browser support when using __CSS3 Techniques__.



Connect with Ariel on [Twitter](https://twitter.com/yerariel) & <a rel="author" href="https://plus.google.com/+ArielSal"> Google+ </a>
