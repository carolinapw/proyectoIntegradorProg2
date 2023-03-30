let express = require('express');
let router = express.Router();
let indexController = require("../controllers/indexController");
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', indexController.descripcion); //modificar

module.exports = router;
