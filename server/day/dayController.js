var Days = require('./dayModel')
var Q = require('q');

var findDays = Q.nbind(Days.find, Days);
var findDay = Q.nbind(Days.findOne, Days);

module.exports = {
  findDays: function(req, res, next) {
    findDays({})
      .then(function(days){
        res.send(days);
      })
      .fail(function(error){
        next(error);
      })
  },

  updateStaff: function(req, res, next) {
    var shift = req.body.shift.toLowerCase(),
      staff = req.body.staffArray;
      
    findDay({day: req.params.day})
    .then(function(day){
      day[shift].staff = staff;
      day.markModified(shift);
      day.save()
      res.send(day);
    })
    .fail(function(error){
      next(error);
    })
  },

  updateManagement: function(req, res, next) {
    var shift = req.body.shift.toLowerCase(),
      type = req.body.type,
      name = req.body.name;
      
    findDay({day: req.params.day})
    .then(function(day){
      day[shift][type] = name;
      day.markModified(shift);
      day.save()
      res.send(day);
    })
    .fail(function(error){
      next(error);
    })
  }
}