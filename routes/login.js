let express = require('express');
let router = express.Router();
let loginController = require ("../controllers/loginController");

router.get ("/", loginController.form);

/* router.get ('/usuario', loginController.usuario);

router.get ('/contraseña', loginController.contraseña);

router.get ('/recordarme', loginController.recordarme); */

module.exports= router;
