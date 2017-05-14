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
        $scope.shiftObject.staff.push($scope.staff);
        dayService.updateStaff($scope.dayTitle, $scope.shiftObject.staff, $scope.title)
        $scope.staff = '';
      }

      $scope.remove = function(arr, index) {
        var member = arr.splice(index, 1);
        dayService.updateStaff($scope.dayTitle, arr, $scope.title)
      }

    }
  }
});