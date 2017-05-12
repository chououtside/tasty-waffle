var Users = require('./userModel.js');
var Q = require('q');

var findUsers = Q.nbind(Users.find, Users);

module.exports = {
  findUsers: function(req, res, next) {
    findUsers({})
      .then(function(users){
        res.send(users);
      })
      .fail(function(error){
        next(error);
      })
  }
}