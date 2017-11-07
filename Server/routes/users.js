var express = require('express');
var router = express.Router();
const controller = require('../controller/userController')

/* GET users listing. */
router.get('/', controller.findAll);

router.post('/register', controller.register)

router.post('/login', controller.login)

module.exports = router;
