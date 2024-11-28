const express = require("express");
const turnoController = require("../controller/turnoController");
const router = express.Router();

//  rutas de CRUD para los turnos
router.get("/", turnoController.getAllTurnos);  
router.get("/:id", turnoController.getTurnoById);  
router.post("/", turnoController.createTurno);  
router.put("/:id", turnoController.updateTurno);  
router.delete("/:id", turnoController.deleteTurno);  

module.exports = router;
