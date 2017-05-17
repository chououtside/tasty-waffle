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
      
      $scope.updateDropdown = function(type, newValue, oldvalue) {
        // Update Count
        if (newValue === '') {
          $scope.shiftObject.count = $scope.shiftObject.count - 1;
          dayService.updateColorStatus($scope.shiftObject);
        }
        if (oldvalue === '') {
          $scope.shiftObject.count = $scope.shiftObject.count + 1;
          dayService.updateColorStatus($scope.shiftObject);
        }
        
        if ($scope.manager === $scope.standby) {
          $scope.shiftObject.count = $scope.shiftObject.count - 1;
          dayService.updateColorStatus($scope.shiftObject);
        }
        if (oldvalue === $scope.manager || oldvalue === $scope.standby) {
          $scope.shiftObject.count = $scope.shiftObject.count + 1;
          dayService.updateColorStatus($scope.shiftObject);
        }

        // Updates Database
        if (type === 'manager') {
          dayService.updateManagement(type, $scope.manager, $scope.dayTitle, $scope.title);
        } else {
          dayService.updateManagement(type, $scope.standby, $scope.dayTitle, $scope.title);
        }
      }
    }
  }
});