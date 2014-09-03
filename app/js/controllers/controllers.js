'use strict';

/* Controllers */

// angular.module('myApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);


var app = angular.module('myApp.controllers', []);

app.controller('HomeController', ['$scope', '$location', function($scope, $location) {
	$scope.changeView = function(view) {
        $location.path(view);
    };

    $scope.headerTemplate = {
        name: 'header.html',
        url: 'partials/header.html'
    };

    $scope.apps = [
		{ title: "D3 on AngularJS", content:"D3 on AngularJS", url:"#/d3", active: true, disabled: false },
		{ title: "HighCharts on AngularJS", content:"HighCharts on AngularJS", url:"#/highcharts", active: false, disabled: false },
		{ title: "Responsive Design", content:"Flickr Image", url:"#/responsive", active: false, disabled: false },
		{ title: "Google Map API", content:"Google Map API", url:"#/map", active: false, disabled: false },
		{ title: "Flickr API Search", content:"Flickr API Search", url:"#/flickr", active: false, disabled: false },
		{ title: "Node.js", content:"Node.js", url:"#/nodejs", active: false, disabled: false },
		{ title: "All kinds of Directives", content:"All kinds of AngularJS Directives", url:"#/xin_angular", active: false, disabled: false }
	];

}]);


app.controller('FindCtrl', ['$scope', function($scope) {

}]);

// app.run(function(editableOptions) {
// 	editableOptions.theme = 'bs3';
// });