angular.module('services', [])
.factory('dayService', function($http) {
  var initializeDays = function () {
    return $http({
      method: 'GET',
      url: 'api/days'
    })
    .then(function (resp){
      return resp.data;
    });
  };

  return {
    initializeDays: initializeDays
  }
});