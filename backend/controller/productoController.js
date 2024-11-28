const Producto = require('../model/productoModel');

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  try {
    const { Nombre_Producto, Descripcion, Precio, Stock, Categoria } = req.body;
    const nuevoProducto = await Producto.create({
      Nombre_Producto,
      Descripcion,
      Precio,
      Stock,
      Categoria,
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto existente
exports.updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nombre_Producto, Descripcion, Precio, Stock, Categoria } = req.body;

    const actualizado = await Producto.update(id, {
      Nombre_Producto,
      Descripcion,
      Precio,
      Stock,
      Categoria,
    });

    if (!actualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un producto
exports.deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await Producto.delete(id);

    if (!eliminado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
