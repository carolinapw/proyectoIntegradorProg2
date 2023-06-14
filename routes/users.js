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


router.get('/profile/follow/:id', usersController.seguir);
router.get('/profile/unfollow/:id', usersController.dejarDeSeguir);

router.get('/profile/:id', usersController.perfil);



module.exports = router;
