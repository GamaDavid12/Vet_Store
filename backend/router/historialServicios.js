const express = require('express');
const router = express.Router();
const historialServiciosController = require('../controller/historialServiciosController');

// Rutas del CRUD
router.get('/', historialServiciosController.getAllHistorialServicios); // Obtener todos
router.get('/:ID_Historial/:ID_Servicio', historialServiciosController.getHistorialServicio); // Obtener por ID compuesto
router.post('/', historialServiciosController.createHistorialServicio); // Crear nuevo
router.delete('/:ID_Historial/:ID_Servicio', historialServiciosController.deleteHistorialServicio); // Eliminar por ID compuesto

module.exports = router;
