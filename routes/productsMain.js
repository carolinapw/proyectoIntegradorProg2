let express = require('express');
let router = express.Router();
let productsController = require("../controllers/productsController");

router.get('/:id', productsController.detalle);

router.get('/:id/edit', productsController.showEdit);
//router.post('/:id/edit', productsController.edit);



// router.get('/borrar', productsController.borrar);

// router.get('/agregar', productsController.agregar);








module.exports = router