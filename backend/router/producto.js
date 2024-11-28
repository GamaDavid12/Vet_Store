const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');

// Rutas del CRUD
router.get('/', productoController.getAllProductos); 
router.get('/:id', productoController.getProductoById); 
router.post('/', productoController.createProducto); 
router.put('/:id', productoController.updateProducto); 
router.delete('/:id', productoController.deleteProducto); 

module.exports = router;
