# slugify

AngularJS bindings for the wonderful [SpeakingURL](https://github.com/pid/speakingurl) library

## How do I add this to my project?

You can download `slugify` by:

* Using bower and running `bower install slugify`
* Using npm and running `npm install slugify`
* Downloading it manually from this repo

## How to use slugify

This module exposes a `$speakingurl` service that can be used in the code,
and a `slugify` filter that can be used in templates directly:

```
MyAngularModule = (function () {
  var myModule = angular.module('my.module', ['slugify']);

  myModule.controller('MyController', function ($scope, $speakingurl, model) {
    $scope.model   = model;
    $scope urlSlug = $speakingurl.slugify(model.name, {});
  });
```

```
<ul>
  <li ng-repeat="user in users">
    <a href="/user/{{ user.fullName | slugify }}" ng-bind="user.fullName"></a>
  </li>
</ul>