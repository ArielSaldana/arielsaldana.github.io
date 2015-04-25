---

title: Angular Hello World Tutorial
tags: [css,html,javascript,js,web]
category: blog
layout: post

---

## Introduction

__AngularJS__ has become one of the most popular JavaScript frameworks and for good reason. The AngularJS team have done superb work and are very dedicated to ensuring AngularJS is the best it can be. AngularJS is also backed up by a strong community of users compared to other frameworks. But despite all this it's still relatively unknown to most users.



## How it works

Angular's magic comes from its 'directives' which allow you to extend your HTML by creating your own tags and attributes. Angular applications have a differen structure than other JavaScript MVC frameworks, but it is highly modular and easy to maintain once you understand the flow and structure.

## Data Binding

Let’s take a look at a very simple AngularJS app, that uses two-way data binding.

``` html
<body ng-app>
  <div>
    <input type='text' ng-model='name' />
    <h2>{{name}}</h2>
  </div>
</body>
```

Now let's explain what's happening.

`<body ng-app>` : All Angular code must be wrapper in this directive. This declares that everything within this tag will be treated as an angular application.

`<input type='text' ng-model='name' />` : This is one part of the data binding. Here we are using another directive, ng-model, to bind the input to a string. Note that in this example we also see that attribute directives can have arguments.

`<h2>{{name}}</h2>` : Whenever you type into the input box, this h2 tag updates automatically. This is the automatic DOM manipulation I mentioned earlier. We were able to do this without writing a single line of JavaScript.

While a lot of Angular's magic comes from it's easy two-way bindings, it is also it's Achilles heel. On one hand you have ability to build the UI through a clean interface, and less-destrutive DOM presentation, but on the other hand - having too many directives modifying the dom can greatly decrease a AngularJS app's performance. 

## Modules

Modules are used to organize the objects in an AngularJS application.

To instatiate a module that we will use in our AngularJS app we use the angular.module function :

`app = angular.module('myApp', []);`

And to tell your app to use this module we bind it using :

`<body ng-app='myApp'>`

Now that we have a module, let's create a __Controller__

Connect with Ariel on [Twitter](https://twitter.com/yerariel) & <a rel="author" href="https://plus.google.com/+ArielSal"> Google+ </a>
