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

  var updateStaff = function(day, staffArray, shift) {
    return $http({
      method: 'PUT',
      url: 'api/' + day + '/update/staff',
      data: {
        staffArray: staffArray,
        shift: shift
      }
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var updateManagement = function(type, name, day, shift) {
    return $http({
      method: 'PUT',
      url: 'api/' + day + '/update/management',
      data: {
        type: type,
        name: name,
        shift: shift
      }
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    initializeDays: initializeDays,
    updateStaff: updateStaff,
    updateManagement: updateManagement
  };
});