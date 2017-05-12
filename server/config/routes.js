var router = require('express').Router();
var userController = require('../users/userController')

router.get('/api/users', userController.findUsers);

module.exports = router;