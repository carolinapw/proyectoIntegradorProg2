let express = require('express');
let router = express.Router();

let indexController = require("../controllers/indexController");
//const productsController = require('../controllers/productsController');
let loginController = require('../controllers/loginController');
let registerController = require('../controllers/registerController')

/* GET home page. */
router.get('/', indexController.index); 

router.get('/login', loginController.form);

router.get('/register', registerController.registro);

router.get('/search', indexController.search);




module.exports = router;
