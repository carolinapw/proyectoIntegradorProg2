var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.perfil);

module.exports = router;
