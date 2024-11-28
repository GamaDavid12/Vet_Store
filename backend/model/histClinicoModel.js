const db  = require("./db"); // Importar conexión a la base de datos

const HistorialClinico = {
  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM Historial_Clinico');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM Historial_Clinico WHERE ID_Historial = ?', [id]);
    return rows[0];
  },

  create: async (data) => {
    const { Diagnostico, Tratamiento, Notas, Fecha, ID_Mascota } = data;
    const [result] = await db.execute(
      'INSERT INTO Historial_Clinico (Diagnostico, Tratamiento, Notas, Fecha, ID_Mascota) VALUES (?, ?, ?, ?, ?)',
      [Diagnostico, Tratamiento, Notas, Fecha, ID_Mascota]
    );
    return { id: result.insertId, ...data };
  },

  update: async (id, data) => {
    const { Diagnostico, Tratamiento, Notas, Fecha, ID_Mascota } = data;
    const [result] = await db.execute(
      'UPDATE Historial_Clinico SET Diagnostico = ?, Tratamiento = ?, Notas = ?, Fecha = ?, ID_Mascota = ? WHERE ID_Historial = ?',
      [Diagnostico, Tratamiento, Notas, Fecha, ID_Mascota, id]
    );
    return result.affectedRows > 0; // Devuelve `true` si se actualizó
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM Historial_Clinico WHERE ID_Historial = ?', [id]);
    return result.affectedRows > 0; // Devuelve `true` si se eliminó
  },
};

module.exports = HistorialClinico;
