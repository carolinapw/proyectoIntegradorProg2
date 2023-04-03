let express = require('express');
let router = express.Router();

let indexController = require("../controllers/indexController");
//const productsController = require('../controllers/productsController');



/* GET home page. */
router.get('/', indexController.index); 





router.get('/search', indexController.search);




module.exports = router;
