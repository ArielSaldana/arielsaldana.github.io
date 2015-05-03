---

title: AngularJS Introduction
description: Introduction to AngularJS Developent. AngularJS extends the normal HTML syntax to express the application component more clearly giving HTML functionalities. 
keywords: css,html,javascript,js,web
tags: [css,html,javascript,js,web]
category: blog
layout: post

---

__AngularJS__ has become one of the most popular JavaScript frameworks for good reasons. The AngularJS team have done superb work and are very dedicated to ensuring AngularJS is the best it can be. AngularJS is also backed up by a strong community of users compared to other frameworks. But despite all this it's still relatively unknown to most users.


## How it works

Angular's magic comes from its 'directives' which allow you to extend your HTML by creating your own tags and attributes. Angular applications have a different structure than other JavaScript MVC frameworks, but it is highly modular and easy to maintain once you understand the flow and structure.

## Data Binding

Let’s take a look at a very simple AngularJS app, that uses two-way data binding.

```html
<body ng-app>
  <div>
    <input type='text' ng-model='name' />
    <h2>{{name}}</h2>
  </div>
</body>
```

Now let's explain what's happening.

`<body ng-app>` : All Angular code must be wrapped in this directive. This declares that everything within this tag will be treated as an angular application.

`<input type='text' ng-model='name' />` : This is one part of the data binding. Here we are using another directive, ng-model, to bind the input to a string. Note that in this example we also see that attribute directives can have arguments.

`<h2>{{name}}</h2>` : Whenever you type into the input box, this h2 tag updates automatically. This is the automatic DOM manipulation I mentioned earlier. We were able to do this without writing a single line of JavaScript.

While a lot of AngularJS's magic comes from it's easy two-way data bindings, that two way data-binding means that changing anything in your application will trigger hundreds of functions that monitor changes. This could hinder performance especially on mobile devices, so you should be careful of Angular's Achilles heel.

## Modules

Modules are used to organize the objects in an AngularJS application.

To instantiate a module that we will use in our AngularJS app we use the angular.module function :

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

While controllers handle the business logic of angular applications, Directives handle the UI logic. We've already used directives in our application, such as ng-app and ng-controller. These directives are built on top of Angular and are defaults. Let's build our own directive and use it in our application.


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

restrict : This tells your directive what kind of directive it will be. restrict is required and there are four possible arguments that can be passed to it:

1. E : Element. example usage: `<my-directive></my-directive>`
+ A : Attribute. example usage: `<div my-directive></div>`
+ C : Class. example usage: `<div class='my-directive'></div>`
+ M : Comment. example usage: `<!-- directive:my-directive -->`

Read about more possible directives at [AngularJs](https://docs.angularjs.org/guide/directive)

##Services

Services are classes that handle business logic and or data. To define a service you do :

```Javascript
app.factory('PersonService', function() {
  var PersonService = {};
  PersonService.people = [];
  PersonService.addPerson = function(person) {
    PersonService.people.push(person);
  };
  return PersonService;
});
```

The first thing you should notice is that services are created differently than controllers. Controllers are functions, services are functions that returns an object. This gives you the option of adding private methods to your service if you would like.

When writing services, Angular provides some helpful modules for communicating with the server. Some of the most useful are ngHttp and ngResource. 

## Routing

Angular also provides support for routing with URLs. Routing is performed by using the config function of the module. Let’s use this to structure separate pages for our main page, and give each person in our person list a profile page. Here is what the route provider will look like:

```JavaScript
app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'templates/home.html',
    controller: 'homePageCtrl'
  });
  $routeProvider.when('/person/:id', {
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  });
});
```

Here we tell that app which template and controller to load based on the URL routed through the AngularJS application. 

__ROUTING AND SEO__

If you were to refresh at /home.html or /profile.html you would get a 404 error. In order to correctly re-route to these url you'd have to do additional server configurations. Basically you'd to point any url directives to the base app.

## Conclusion

I hope you found this helpful, but this is just scratching the surface of what Angular.js is capable of. If you would like to learn more about Angular, here are some resources for further reading:

[AngularJS Documentation](http://angularjs.org) - official documentation, lots of good examples  
[EggHead.io](http://egghead.io) - several short (usually 4 or 5 minute) videos explaining several particular parts of angular.  
[A Comparison of Angular, Backbone, CanJS and Ember](http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/) - a great article comparing AngularJS to some  



Connect with Ariel on [Twitter](https://twitter.com/yerariel) & <a rel="author" href="https://plus.google.com/+ArielSal"> Google+ </a>
