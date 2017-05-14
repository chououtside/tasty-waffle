angular.module('shiftmanager.shift', [])
.directive('shift', function() {
  return {
    templateUrl: 'shift/shift.html',
    scope: {
      title: '@',
      shiftObject: '=',
      staff: '@',
      dayTitle: '@'
    },
    controller: function ($scope, dayService) {
      $scope.add = function() {
        var arrayCopy = $scope.shiftObject.staff.slice().push($scope.staff);
        $scope.shiftObject.staff.push($scope.staff);
        dayService.addStaff($scope.dayTitle, $scope.staff, $scope.title)
        $scope.staff = '';
      }

    }
  }
});