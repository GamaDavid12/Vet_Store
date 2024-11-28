
const router = express.Router();
const express = require("express");
const mascotaController = require("../controller/mascotaController");



// Definir las rutas de CRUD para las mascotas
router.get("/", mascotaController.getAllMascotas);  
router.get("/:id", mascotaController.getMascotaById);  
router.post("/", mascotaController.createMascota);  
router.put("/:id", mascotaController.updateMascota);  
router.delete("/:id", mascotaController.deleteMascota);  

module.exports = router;

