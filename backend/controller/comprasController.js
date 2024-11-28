const Compras = require('../model/comprasModel');

// Obtener todas las compras
exports.getAllCompras = async (req, res) => {
  try {
    const compras = await Compras.findAll();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una compra por ID
exports.getCompraById = async (req, res) => {
  try {
    const compra = await Compras.findById(req.params.id);
    if (!compra) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }
    res.json(compra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva compra
exports.createCompra = async (req, res) => {
  try {
    const { Fecha, Total, ID_Usuario } = req.body;
    const nuevaCompra = await Compras.create({ Fecha, Total, ID_Usuario });
    res.status(201).json(nuevaCompra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una compra existente
exports.updateCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const { Fecha, Total, ID_Usuario } = req.body;

    const actualizado = await Compras.update(id, { Fecha, Total, ID_Usuario });

    if (!actualizado) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }

    res.json({ message: 'Compra actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una compra
exports.deleteCompra = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await Compras.delete(id);

    if (!eliminado) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }

    res.json({ message: 'Compra eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
