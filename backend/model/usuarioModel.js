const db  = require("./db");

// Modelo para interactuar con la tabla Usuarios

// Obtener todos los usuarios
exports.getAll = callback => {
    const query = "SELECT * FROM Usuarios";
    db.query(query, (err, results) => {
        callback(err, results);
    });
};

// Obtener un usuario por ID
exports.getById = (id, callback) => {
    const query = "SELECT * FROM Usuarios WHERE ID_Usuario = ?";
    db.query(query, [id], (err, results) => {
        callback(err, results[0]);
    });
};

// Crear un nuevo usuario
exports.create = (usuario, callback) => {
    const { Nombre, Apellido, Telefono, Correo_Electronico, Direccion } = usuario;
    const query = "INSERT INTO Usuarios (Nombre, Apellido, Telefono, Correo_Electronico, Direccion) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [Nombre, Apellido, Telefono, Correo_Electronico, Direccion], (err, results) => {
        callback(err, results);
    });
};

// Actualizar un usuario por ID
exports.update = (id, usuario, callback) => {
    const { Nombre, Apellido, Telefono, Correo_Electronico, Direccion } = usuario;
    const query = "UPDATE Usuarios SET Nombre = ?, Apellido = ?, Telefono = ?, Correo_Electronico = ?, Direccion = ? WHERE ID_Usuario = ?";
    db.query(query, [Nombre, Apellido, Telefono, Correo_Electronico, Direccion, id], (err, results) => {
        callback(err, results);
    });
};

// Eliminar un usuario por ID
exports.delete = (id, callback) => {
    const query = "DELETE FROM Usuarios WHERE ID_Usuario = ?";
    db.query(query, [id], (err, results) => {
        callback(err, results);
    });
};
module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
}