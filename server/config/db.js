var mongoose = require('mongoose');
var Days = require('../day/dayModel');


var initializeDays = function() {
  var days = [],
    dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weekdayLunchReq = 4,
    weekendLunchReq = 3,
    dinnerReq = 5

  for (var i = 0; i < dayNames.length; i++) {
    var day = {},
      lunch = {},
      dinner = {};

    // If the day is a weekday
    if (i < 5) {
      lunch.required = weekdayLunchReq;
    } else {
      lunch.required = weekendLunchReq;
    }

    lunch.staff = [];
    lunch.standby = '';
    lunch.manager = '';

    dinner.required = dinnerReq;
    dinner.staff = [];
    dinner.standby = '';
    dinner.manager = '';
    
    day.day = dayNames[i];
    day.lunch = lunch;
    day.dinner = dinner;
    days.push(day);
  }

  return days;
}

//initialize static database tables if they do not exist
var initializeDb = function() {
  var days = initializeDays();
  Days.find({}, function(err, day) {
    if (!day.length) {
      Days.create(days, function(err) {
        if (!err) {
          console.log('Created Empty Days Template in DB.')
        } else {
          console.log('error:', err);
        }
      });
    }
  });
}();
