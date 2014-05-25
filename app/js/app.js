'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/runner', {templateUrl: 'partials/runner.html', controller: 'RunnerCtrl'});
  $routeProvider.otherwise({redirectTo: '/runner'});
}]);
