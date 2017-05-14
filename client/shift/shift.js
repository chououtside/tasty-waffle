angular.module('shiftmanager.shift', [])
.directive('shift', function() {
  return {
    templateUrl: 'shift/shift.html',
    scope: {
      shiftObject: '='
    }
  }
});