const db = require('./db'); 

const Compras = {
  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM Compras');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM Compras WHERE ID_Compra = ?', [id]);
    return rows[0];
  },

  create: async (data) => {
    const { Fecha, Total, ID_Usuario } = data;
    const [result] = await db.execute(
      'INSERT INTO Compras (Fecha, Total, ID_Usuario) VALUES (?, ?, ?)',
      [Fecha, Total, ID_Usuario]
    );
    return { id: result.insertId, ...data };
  },

  update: async (id, data) => {
    const { Fecha, Total, ID_Usuario } = data;
    const [result] = await db.execute(
      'UPDATE Compras SET Fecha = ?, Total = ?, ID_Usuario = ? WHERE ID_Compra = ?',
      [Fecha, Total, ID_Usuario, id]
    );
    return result.affectedRows > 0; // Devuelve `true` si se actualizó
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM Compras WHERE ID_Compra = ?', [id]);
    return result.affectedRows > 0; // Devuelve `true` si se eliminó
  },
};

module.exports = Compras;
