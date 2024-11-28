const express = require('express');
const router = express.Router();
const historialClinicoController = require('../controller/histClinicoController');

// Rutas del CRUD
router.get('/', historialClinicoController.getAllHistorial); 
router.get('/:id', historialClinicoController.getHistorialById);
router.post('/', historialClinicoController.createHistorial);
router.put('/:id', historialClinicoController.updateHistorial); 
router.delete('/:id', historialClinicoController.deleteHistorial); 

module.exports = router;
