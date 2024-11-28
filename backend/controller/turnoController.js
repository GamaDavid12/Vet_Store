// controllers/turnoController.js
const turnoModel = require("../models/turnoModel");

// Obtener todos los turnos
const getAllTurnos = (req, res) => {
  turnoModel.obtenerTurnos((err, turnos) => {
    if (err) {
      return res.status(500).json({ message: "Error al obtener los turnos" });
    }
    res.status(200).json(turnos);
  });
};

// Obtener un turno por su ID
const getTurnoById = (req, res) => {
  const { id } = req.params;
  turnoModel.obtenerTurnoPorId(id, (err, turno) => {
    if (err) {
      return res.status(500).json({ message: "Error al obtener el turno" });
    }
    if (!turno) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }
    res.status(200).json(turno);
  });
};

// Crear un nuevo turno
const createTurno = (req, res) => {
  const { fecha, hora, estado, idUsuario, idMascota, idServicio } = req.body;
  turnoModel.crearTurno(fecha, hora, estado, idUsuario, idMascota, idServicio, (err, turnoId) => {
    if (err) {
      return res.status(500).json({ message: "Error al crear el turno" });
    }
    res.status(201).json({ message: "Turno creado exitosamente", id: turnoId });
  });
};

// Actualizar un turno
const updateTurno = (req, res) => {
  const { id } = req.params;
  const { fecha, hora, estado, idUsuario, idMascota, idServicio } = req.body;
  turnoModel.actualizarTurno(id, fecha, hora, estado, idUsuario, idMascota, idServicio, (err, rowsAffected) => {
    if (err) {
      return res.status(500).json({ message: "Error al actualizar el turno" });
    }
    if (rowsAffected === 0) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }
    res.status(200).json({ message: "Turno actualizado exitosamente" });
  });
};

// Eliminar un turno
const deleteTurno = (req, res) => {
  const { id } = req.params;
  turnoModel.eliminarTurno(id, (err, rowsAffected) => {
    if (err) {
      return res.status(500).json({ message: "Error al eliminar el turno" });
    }
    if (rowsAffected === 0) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }
    res.status(200).json({ message: "Turno eliminado exitosamente" });
  });
};

module.exports = {
  getAllTurnos,
  getTurnoById,
  createTurno,
  updateTurno,
  deleteTurno
};
