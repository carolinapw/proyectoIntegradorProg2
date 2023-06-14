let express = require('express');
let router = express.Router();
let productsController = require("../controllers/productsController");



router.get('/:id/edit', productsController.showEdit);
router.post('/:id/edit', productsController.edit);

router.get('/add', productsController.agregarProducto);
router.post('/add', productsController.nuevoProducto);

router.post('/borrar/:id', productsController.borrar);
router.get('/:id', productsController.detalle);









module.exports = router