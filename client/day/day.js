angular.module('shiftmanager.day', [])
.directive('day', function() {
  return {
    templateUrl: 'day/day.html',
    transclude: true,
    scope: {
      dayTitle: '@'
    }
  }
});