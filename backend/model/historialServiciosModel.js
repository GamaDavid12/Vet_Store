const db = require('./db'); 

const HistorialServicios = {
  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM Historial_Servicios');
    return rows;
  },

  findOne: async (ID_Historial, ID_Servicio) => {
    const [rows] = await db.execute(
      'SELECT * FROM Historial_Servicios WHERE ID_Historial = ? AND ID_Servicio = ?',
      [ID_Historial, ID_Servicio]
    );
    return rows[0];
  },

  create: async (data) => {
    const { ID_Historial, ID_Servicio } = data;
    const [result] = await db.execute(
      'INSERT INTO Historial_Servicios (ID_Historial, ID_Servicio) VALUES (?, ?)',
      [ID_Historial, ID_Servicio]
    );
    return { ID_Historial, ID_Servicio };
  },

  delete: async (ID_Historial, ID_Servicio) => {
    const [result] = await db.execute(
      'DELETE FROM Historial_Servicios WHERE ID_Historial = ? AND ID_Servicio = ?',
      [ID_Historial, ID_Servicio]
    );
    return result.affectedRows > 0; // Devuelve `true` si se eliminó
  },
};

module.exports = HistorialServicios;
