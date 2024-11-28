const express = require('express');
const router = express.Router();
const detalleCompraController = require('../controller/detalleCompraController');

// Rutas del CRUD
router.get('/', detalleCompraController.getAllDetallesCompra); 
router.get('/:id', detalleCompraController.getDetalleCompraById); 
router.post('/', detalleCompraController.createDetalleCompra);
router.put('/:id', detalleCompraController.updateDetalleCompra); 
router.delete('/:id', detalleCompraController.deleteDetalleCompra); 

module.exports = router;
