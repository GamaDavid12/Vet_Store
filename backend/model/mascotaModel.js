// models/mascotaModel.js
const db = require('../config/db');

// Función para obtener todas las mascotas
const obtenerMascotas = (callback) => {
  db.query('SELECT * FROM Mascotas', (err, results) => {
    if (err) {
      console.error('Error al obtener mascotas:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Función para obtener una mascota por su ID
const obtenerMascotaPorId = (idMascota, callback) => {
  db.query('SELECT * FROM Mascotas WHERE ID_Mascota = ?', [idMascota], (err, results) => {
    if (err) {
      console.error('Error al obtener mascota:', err);
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};

// Función para crear una nueva mascota
const crearMascota = (nombre, especie, raza, fechaNacimiento, idUsuario, callback) => {
  const query = 'INSERT INTO Mascotas (Nombre, Especie, Raza, Fecha_Nacimiento, ID_Usuario) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nombre, especie, raza, fechaNacimiento, idUsuario], (err, results) => {
    if (err) {
      console.error('Error al crear mascota:', err);
      return callback(err, null);
    }
    callback(null, results.insertId);  // Devuelve el ID de la nueva mascota
  });
};

// Función para actualizar una mascota
const actualizarMascota = (idMascota, nombre, especie, raza, fechaNacimiento, idUsuario, callback) => {
  const query = 'UPDATE Mascotas SET Nombre = ?, Especie = ?, Raza = ?, Fecha_Nacimiento = ?, ID_Usuario = ? WHERE ID_Mascota = ?';
  db.query(query, [nombre, especie, raza, fechaNacimiento, idUsuario, idMascota], (err, results) => {
    if (err) {
      console.error('Error al actualizar mascota:', err);
      return callback(err, null);
    }
    callback(null, results.affectedRows);  // Devuelve el número de filas afectadas
  });
};

// Función para eliminar una mascota
const eliminarMascota = (idMascota, callback) => {
  const query = 'DELETE FROM Mascotas WHERE ID_Mascota = ?';
  db.query(query, [idMascota], (err, results) => {
    if (err) {
      console.error('Error al eliminar mascota:', err);
      return callback(err, null);
    }
    callback(null, results.affectedRows);  // Devuelve el número de filas afectadas
  });
};

module.exports = {
  obtenerMascotas,
  obtenerMascotaPorId,
  crearMascota,
  actualizarMascota,
  eliminarMascota
};
