const Mascota = require('../models/mascota');

// Obtener todas las mascotas
exports.index = async (req, res) => {
    try {
        const mascotas = await Mascota.findAll();
        res.render('index', { mascotas });
    } catch (err) {
        console.error('Error al obtener mascotas:', err);
        res.status(500).send('Error interno del servidor');
    }
};

// Crear una nueva mascota (mostrar formulario)
exports.crear = (req, res) => {
    res.render('crear');
};

// Guardar una nueva mascota
exports.store = async (req, res) => {
    try {
        const { nombre, especie, raza, fecha_nacimiento, id_usuario } = req.body;
        await Mascota.create({ Nombre: nombre, Especie: especie, Raza: raza, Fecha_Nacimiento: fecha_nacimiento, ID_Usuario: id_usuario });
        res.redirect('/');
    } catch (err) {
        console.error('Error al crear mascota:', err);
        res.status(500).send('Error interno del servidor');
    }
};

// Editar una mascota (mostrar formulario)
exports.editar = async (req, res) => {
    try {
        const mascota = await Mascota.findByPk(req.params.id);
        res.render('editar', { mascota });
    } catch (err) {
        console.error('Error al obtener la mascota:', err);
        res.status(500).send('Error interno del servidor');
    }
};

// Actualizar los datos de una mascota
exports.actualizar = async (req, res) => {
    try {
        const { nombre, especie, raza, fecha_nacimiento, id_usuario } = req.body;
        await Mascota.update(
            { Nombre: nombre, Especie: especie, Raza: raza, Fecha_Nacimiento: fecha_nacimiento, ID_Usuario: id_usuario },
            { where: { ID_Mascota: req.params.id } }
        );
        res.redirect('/');
    } catch (err) {
        console.error('Error al actualizar mascota:', err);
        res.status(500).send('Error interno del servidor');
    }
};

// Eliminar una mascota
exports.eliminar = async (req, res) => {
    try {
        await Mascota.destroy({ where: { ID_Mascota: req.params.id } });
        res.redirect('/');
    } catch (err) {
        console.error('Error al eliminar mascota:', err);
        res.status(500).send('Error interno del servidor');
    }
};
