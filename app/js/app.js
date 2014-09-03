'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  // 'ui.bootstrap',
  'snap',
  // 'moleculeond3',
  // 'orthographicd3',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
}])
.config(['$routeProvider', function($routeProvider) {
  	$routeProvider
  		.when('/home', {
  			templateUrl: 'partials/home.html', 
  			controller: 'HomeController'
  		});

    $routeProvider
      .when('/d3', {
        templateUrl: 'partials/d3.html', 
        controller: 'HomeController'
      });

    $routeProvider
      .when('/highcharts', {
        templateUrl: 'partials/highcharts.html', 
        controller: 'HomeController'
      });

    $routeProvider
      .when('/responsive', {
        templateUrl: 'partials/responsive.html', 
        controller: 'HomeController'
      });

    $routeProvider
      .when('/map', {
        templateUrl: 'partials/map.html', 
        controller: 'HomeController'
      });

    $routeProvider
      .when('/flickr', {
        templateUrl: 'partials/flickr.html', 
        controller: 'HomeController'
      });

    $routeProvider
      .when('/nodejs', {
        templateUrl: 'partials/nodejs.html', 
        controller: 'HomeController'
      });

    $routeProvider
      .when('/xin_angular', {
        templateUrl: 'partials/xin_angular.html', 
        controller: 'HomeController'
      });

    $routeProvider.otherwise({redirectTo: '/home'});

}]);
