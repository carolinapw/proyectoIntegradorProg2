var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController');


/* GET users listing. */

router.get('/register', usersController.showRegistro);
router.post('/register', usersController.registro);

router.get('/login', usersController.logIn);
router.post('/login', usersController.signIn);

router.post('/logout', usersController.logout);


router.get('/profile/edit', usersController.editar);
router.post('/profile/edit', usersController.actualizar);

router.get('/profile/follow', usersController.seguir);

router.get('/profile/:id', usersController.perfil);
//router.get('/profile/unfollow', usersController.dejarDeSeguir);




module.exports = router;
