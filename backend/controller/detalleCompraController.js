const DetalleCompra = require('../model/detalleCompraModel');

// Obtener todos los detalles de compra
exports.getAllDetallesCompra = async (req, res) => {
  try {
    const detalles = await DetalleCompra.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un detalle de compra por ID
exports.getDetalleCompraById = async (req, res) => {
  try {
    const detalle = await DetalleCompra.findById(req.params.id);
    if (!detalle) {
      return res.status(404).json({ error: 'Detalle de compra no encontrado' });
    }
    res.json(detalle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo detalle de compra
exports.createDetalleCompra = async (req, res) => {
  try {
    const { ID_Compra, ID_Producto, Cantidad, Precio } = req.body;
    const nuevoDetalle = await DetalleCompra.create({
      ID_Compra,
      ID_Producto,
      Cantidad,
      Precio,
    });
    res.status(201).json(nuevoDetalle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un detalle de compra existente
exports.updateDetalleCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const { ID_Compra, ID_Producto, Cantidad, Precio } = req.body;

    const actualizado = await DetalleCompra.update(id, {
      ID_Compra,
      ID_Producto,
      Cantidad,
      Precio,
    });

    if (!actualizado) {
      return res.status(404).json({ error: 'Detalle de compra no encontrado' });
    }

    res.json({ message: 'Detalle de compra actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un detalle de compra
exports.deleteDetalleCompra = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await DetalleCompra.delete(id);

    if (!eliminado) {
      return res.status(404).json({ error: 'Detalle de compra no encontrado' });
    }

    res.json({ message: 'Detalle de compra eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
}
};
