let express = require('express');
let router = express.Router();
let indexController = require("../controllers/indexController");
const productsController = require('../controllers/productsController');
const loginController = require('../controllers/loginController');

/* GET home page. */
router.get('/', indexController.index); 
//router.get('/login', loginController.index);

module.exports = router;
