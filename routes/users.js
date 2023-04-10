var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController');


/* GET users listing. */

router.get('/register', usersController.registro);

router.get('/login', usersController.logIn);

router.get('/profile/edit', usersController.editar);

router.get('/profile/follow', usersController.seguir);

router.get('/profile/:id', usersController.perfil);
//router.get('/profile/unfollow', usersController.dejarDeSeguir);




module.exports = router;
