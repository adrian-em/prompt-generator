'use strict';


angular.module('PromptApp', ['PromptApp.filters', 'PromptApp.services', 'PromptApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'index.html'});
    $routeProvider.when('/robots.txt', {templateUrl: 'robots.txt'});
    $routeProvider.when('/humans.txt', {templateUrl: 'humans.txt'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);