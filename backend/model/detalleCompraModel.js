const db = require('./db'); // Importar conexión a la base de datos

const DetalleCompra = {
  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM Detalle_Compra');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM Detalle_Compra WHERE ID_Detalle = ?', [id]);
    return rows[0];
  },

  create: async (data) => {
    const { ID_Compra, ID_Producto, Cantidad, Precio } = data;
    const [result] = await db.execute(
      'INSERT INTO Detalle_Compra (ID_Compra, ID_Producto, Cantidad, Precio) VALUES (?, ?, ?, ?)',
      [ID_Compra, ID_Producto, Cantidad, Precio]
    );
    return { id: result.insertId, ...data };
  },

  update: async (id, data) => {
    const { ID_Compra, ID_Producto, Cantidad, Precio } = data;
    const [result] = await db.execute(
      'UPDATE Detalle_Compra SET ID_Compra = ?, ID_Producto = ?, Cantidad = ?, Precio = ? WHERE ID_Detalle = ?',
      [ID_Compra, ID_Producto, Cantidad, Precio, id]
    );
    return result.affectedRows > 0; // Devuelve `true` si se actualizó
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM Detalle_Compra WHERE ID_Detalle = ?', [id]);
    return result.affectedRows > 0; // Devuelve `true` si se eliminó
  },
};

module.exports = DetalleCompra;
