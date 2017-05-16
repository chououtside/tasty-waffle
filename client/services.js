angular.module('services', [])
.factory('dayService', function($http) {
  var initializeDays = function () {
    return $http({
      method: 'GET',
      url: 'api/days'
    })
    .then(function (resp){
      var days = resp.data;
      // Calculates count of employees for each shift 
      for (var i = 0; i < days.length; i++) {
        var lunch = days[i].lunch;
        var dinner = days[i].dinner;

        var count = lunch.staff.length;
        if (lunch.standby) {
          count += 1;
        }
        if (lunch.manager) {
          count += 1;
        }
        lunch.count = count

        count = dinner.staff.length;
        if (dinner.standby) {
          count += 1;
        }
        if (dinner.manager) {
          count += 1;
        }
        dinner.count = count
      }
      return days;
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