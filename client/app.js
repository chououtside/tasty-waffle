angular.module('shiftmanager', ['ngRoute', 'shiftmanager.days', 'shiftmanager.shift', 'shiftmanager.day', 'services'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'days/days.html',
      controller: 'daysController'
    });
}])