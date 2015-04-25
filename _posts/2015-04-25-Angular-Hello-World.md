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

## Controllers

Controllers are binded to specific HTML elements. They usually contain data and functions that the app interacts with to change the DOM. Controllers an interact with other service objects, which can handle things such as communication with your server. Let's put up an example of a controller.

```JavaScript 
app.controller('mainCtrl', function($scope){
  $scope.name = 'Default Name';
});
```

And the HTML

```HTML
<body ng-app='myApp'>
  <div ng-controller='mainCtrl'>
    <input type='text' ng-model='name' />
    <h2>{{name}}</h2>
  </div>
</body>
```

In this example we used the `ng-controller` directive to bind our controller function to a div element.

Controllers by default get one argument which is called `$scope`. `$scope` contains all of the data that the html can interact with. When you reload the page

Controllers are usually used to manipulate data inside JavaScript, but what if you want to manipulate the DOM? Then we use __Directives__.

## Directives

While controllers handle the business logic of angular applications, Directives handle the UI logic. We've already used directives in our application, such as ng-app and ng-controller. These directives are built ontop of Angular and are defaults. Let's build our own directive and use it in our application.


```JavaScript
app.directive('alertable', function(){
  return {
    restrict : 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        alert(attrs.alertable);
      });
     }
  };
});
```

```HTML
<li ng-repeat='person in people'>
  <span alertable='{{person}}'>{{person}}</span>
</li>
```

As you can see, directives return an object that will define the directive. There are several optional arguments that can be passed here, but let’s look at the two we used here:

#restrict : This tells your directive what kind of directive it will be. restrict is required and there are four possible arguments that can be passed to it:

#E : Element. example usage: `<my-directive></my-directive>`
#A : Attribute. example usage: `<div my-directive></div>`
#C : Class. example usage: `<div class='my-directive'></div>`
#M : Comment. example usage: `<!-- directive:my-directive -->`


Connect with Ariel on [Twitter](https://twitter.com/yerariel) & <a rel="author" href="https://plus.google.com/+ArielSal"> Google+ </a>
