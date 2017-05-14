var router = require('express').Router();
var userController = require('../users/userController');
var dayController = require('../day/dayController');

router.get('/api/days', dayController.findDays);
router.put('/api/:day/update/staff', dayController.updateStaff);
router.put('/api/:day/update/management', dayController.updateManagement);

router.get('/api/users', userController.findUsers);

module.exports = router;