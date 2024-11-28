const HistorialServicios = require('../model/historialServiciosModel');

// Obtener todos los registros del historial de servicios
exports.getAllHistorialServicios = async (req, res) => {
  try {
    const registros = await HistorialServicios.findAll();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un registro específico del historial de servicios
exports.getHistorialServicio = async (req, res) => {
  try {
    const { ID_Historial, ID_Servicio } = req.params;
    const registro = await HistorialServicios.findOne(ID_Historial, ID_Servicio);
    if (!registro) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.json(registro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo registro en el historial de servicios
exports.createHistorialServicio = async (req, res) => {
  try {
    const { ID_Historial, ID_Servicio } = req.body;
    const nuevoRegistro = await HistorialServicios.create({ ID_Historial, ID_Servicio });
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un registro del historial de servicios
exports.deleteHistorialServicio = async (req, res) => {
  try {
    const { ID_Historial, ID_Servicio } = req.params;
    const eliminado = await HistorialServicios.delete(ID_Historial, ID_Servicio);
    if (!eliminado) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.json({ message: 'Registro eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
