var router = require('express').Router();
var userController = require('../users/userController')
var dayController = require('../day/dayController')

router.get('/api/days', dayController.findDays);
router.get('/api/users', userController.findUsers);

module.exports = router;