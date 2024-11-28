const Usuario = require("../models/usuarioModel");

// Obtener todos los usuarios
exports.getAllUsuarios = (req, res) => {
    Usuario.getAll((err, results) => {
        if (err) return res.status(500).send("Error al obtener usuarios");
        res.json(results);
    });
};

// Obtener un usuario por ID
exports.getUsuarioById = (req, res) => {
    Usuario.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).send("Error al obtener el usuario");
        if (!result) return res.status(404).send("Usuario no encontrado");
        res.json(result);
    });
};

// Crear un nuevo usuario
exports.createUsuario = (req, res) => {
    Usuario.create(req.body, (err, result) => {
        if (err) return res.status(500).send("Error al crear el usuario");
        res.status(201).json({ id: result.insertId, ...req.body });
    });
};

// Actualizar un usuario por ID
exports.updateUsuario = (req, res) => {
    Usuario.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).send("Error al actualizar el usuario");
        if (result.affectedRows === 0) return res.status(404).send("Usuario no encontrado");
        res.json({ id: req.params.id, ...req.body });
    });
};

// Eliminar un usuario por ID
exports.deleteUsuario = (req, res) => {
    Usuario.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).send("Error al eliminar el usuario");
        if (result.affectedRows === 0) return res.status(404).send("Usuario no encontrado");
        res.sendStatus(204);
    });
};
 module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
  };