const db = require('./db'); // Importar conexión a la base de datos

const Servicios = {
  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM Servicios');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM Servicios WHERE ID_Servicio = ?', [id]);
    return rows[0];
  },

  create: async (data) => {
    const { Nombre_Servicio } = data;
    const [result] = await db.execute(
      'INSERT INTO Servicios (Nombre_Servicio) VALUES (?)',
      [Nombre_Servicio]
    );
    return { id: result.insertId, Nombre_Servicio };
  },

  update: async (id, data) => {
    const { Nombre_Servicio } = data;
    const [result] = await db.execute(
      'UPDATE Servicios SET Nombre_Servicio = ? WHERE ID_Servicio = ?',
      [Nombre_Servicio, id]
    );
    return result.affectedRows > 0; // Devuelve `true` si se actualizó
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM Servicios WHERE ID_Servicio = ?', [id]);
    return result.affectedRows > 0; // Devuelve `true` si se eliminó
  },
};

module.exports = {
  Servicios
};
