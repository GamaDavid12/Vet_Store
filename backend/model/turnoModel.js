// models/turnoModel.js
const db = require("../config/db");

// Obtener todos los turnos
const obtenerTurnos = (callback) => {
  const query = `SELECT * FROM Turnos`;
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Obtener un turno por su ID
const obtenerTurnoPorId = (idTurno, callback) => {
  const query = `SELECT * FROM Turnos WHERE ID_Turno = ?`;
  db.query(query, [idTurno], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result[0]); // Retorna el turno encontrado
  });
};

// Crear un nuevo turno
const crearTurno = (fecha, hora, estado, idUsuario, idMascota, idServicio, callback) => {
  const query = `INSERT INTO Turnos (Fecha, Hora, Estado, ID_Usuario, ID_Mascota, ID_Servicio) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(query, [fecha, hora, estado, idUsuario, idMascota, idServicio], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.insertId);  // Devuelve el ID del nuevo turno creado
  });
};

// Actualizar un turno
const actualizarTurno = (idTurno, fecha, hora, estado, idUsuario, idMascota, idServicio, callback) => {
  const query = `UPDATE Turnos SET Fecha = ?, Hora = ?, Estado = ?, ID_Usuario = ?, ID_Mascota = ?, ID_Servicio = ? 
                 WHERE ID_Turno = ?`;
  db.query(query, [fecha, hora, estado, idUsuario, idMascota, idServicio, idTurno], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.affectedRows);  // Devuelve las filas afectadas
  });
};

// Eliminar un turno por su ID
const eliminarTurno = (idTurno, callback) => {
  const query = `DELETE FROM Turnos WHERE ID_Turno = ?`;
  db.query(query, [idTurno], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.affectedRows);  // Devuelve las filas afectadas
  });
};

module.exports = {
  obtenerTurnos,
  obtenerTurnoPorId,
  crearTurno,
  actualizarTurno,
  eliminarTurno
};
