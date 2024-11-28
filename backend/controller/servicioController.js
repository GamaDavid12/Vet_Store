const Servicios = require('../model/servicioModel');

// Obtener todos los servicios
exports.getAllServicios = async (req, res) => {
  try {
    const servicios = await Servicios.findAll();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un servicio por ID
exports.getServicioById = async (req, res) => {
  try {
    const servicio = await Servicios.findById(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo servicio
exports.createServicio = async (req, res) => {
  try {
    const { Nombre_Servicio } = req.body;
    const nuevoServicio = await Servicios.create({ Nombre_Servicio });
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un servicio existente
exports.updateServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre_Servicio } = req.body;

    const actualizado = await Servicios.update(id, { Nombre_Servicio });

    if (!actualizado) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }

    res.json({ message: 'Servicio actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un servicio
exports.deleteServicio = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await Servicios.delete(id);

    if (!eliminado) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }

    res.json({ message: 'Servicio eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
