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

  var addStaff = function(day, staffArray, shift) {
    return $http({
      method: 'PUT',
      url: 'api/' + day + '/staff',
      data: {
        day: day,
        staffArray: staffArray,
        shift: shift
      }
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    initializeDays: initializeDays,
    addStaff: addStaff
  };
});