const db = require('./db'); 

const Producto = {
  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM Producto');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM Producto WHERE ID_Producto = ?', [id]);
    return rows[0];
  },

  create: async (data) => {
    const { Nombre_Producto, Descripcion, Precio, Stock, Categoria } = data;
    const [result] = await db.execute(
      'INSERT INTO Producto (Nombre_Producto, Descripcion, Precio, Stock, Categoria) VALUES (?, ?, ?, ?, ?)',
      [Nombre_Producto, Descripcion, Precio, Stock, Categoria]
    );
    return { id: result.insertId, ...data };
  },

  update: async (id, data) => {
    const { Nombre_Producto, Descripcion, Precio, Stock, Categoria } = data;
    const [result] = await db.execute(
      'UPDATE Producto SET Nombre_Producto = ?, Descripcion = ?, Precio = ?, Stock = ?, Categoria = ? WHERE ID_Producto = ?',
      [Nombre_Producto, Descripcion, Precio, Stock, Categoria, id]
    );
    return result.affectedRows > 0; // Devuelve `true` si se actualizó
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM Producto WHERE ID_Producto = ?', [id]);
    return result.affectedRows > 0; // Devuelve `true` si se eliminó
  },
};

module.exports = Producto;
