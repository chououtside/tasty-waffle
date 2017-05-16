angular.module('shiftmanager.days', [])
.controller('daysController', function($scope, dayService){
  dayService.initializeDays()
  .then(function(days){
    $scope.days = days;
  });
});


