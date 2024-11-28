const express = require("express");
const usuarioController = require("../controller/usuarioController");

const router = express.Router();

// Definir las rutas
router.get("/", usuarioController.getAllUsuarios);
router.get("/:id", usuarioController.getUsuarioById);
router.post("/", usuarioController.createUsuario);
router.put("/:id", usuarioController.updateUsuario);
router.delete("/:id", usuarioController.deleteUsuario);

module.exports = router;
