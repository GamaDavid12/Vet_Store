const HistorialClinico = require('../models/histClinicoModel');

// Obtener todos los registros
exports.getAllHistorial = async (req, res) => {
  try {
    const historial = await HistorialClinico.findAll();
    res.json(historial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un registro por ID
exports.getHistorialById = async (req, res) => {
  try {
    const historial = await HistorialClinico.findById(req.params.id);
    if (!historial) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.json(historial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo registro
exports.createHistorial = async (req, res) => {
  try {
    const { Diagnostico, Tratamiento, Notas, Fecha, ID_Mascota } = req.body;
    const nuevoHistorial = await HistorialClinico.create({
      Diagnostico,
      Tratamiento,
      Notas,
      Fecha,
      ID_Mascota,
    });
    res.status(201).json(nuevoHistorial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un registro existente
exports.updateHistorial = async (req, res) => {
  try {
    const { id } = req.params;
    const { Diagnostico, Tratamiento, Notas, Fecha, ID_Mascota } = req.body;

    const actualizado = await HistorialClinico.update(id, {
      Diagnostico,
      Tratamiento,
      Notas,
      Fecha,
      ID_Mascota,
    });

    if (!actualizado) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

    res.json({ message: 'Registro actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un registro
exports.deleteHistorial = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await HistorialClinico.delete(id);

    if (!eliminado) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

    res.json({ message: 'Registro eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
