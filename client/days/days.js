angular.module('shiftmanager.days', [])
.controller('daysController', function($scope, dayService){
  dayService.initializeDays()
  .then(function(data){
    $scope.days = data;
  });
});


