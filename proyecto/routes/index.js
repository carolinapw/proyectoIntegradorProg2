let express = require('express');
let router = express.Router();
let indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.descripcion);

module.exports = router;
