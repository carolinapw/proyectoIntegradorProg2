let express = require('express');
let router = express.Router();
let productsController = require("../controllers/productsController");

router.get('/:id', productsController.detalle);

router.get('/edit', productsController.edit);

// router.get('/comment', productsController.comment);

// router.get('/borrar', productsController.borrar);

router.get('/agregar', productsController.agregar);








module.exports = router