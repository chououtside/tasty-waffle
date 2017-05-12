var Days = require('./dayModel')
var Q = require('q');

var findDays = Q.nbind(Days.find, Days);

module.exports = {
  findDays: function(req, res, next) {
    findDays({})
      .then(function(days){
        res.send(days);
      })
      .fail(function(error){
        next(error);
      })
  }
}