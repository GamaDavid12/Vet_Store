const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();



// Middlewares
app.use(cors());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));


// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ciruja23',
    database: 'vet_store',
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL conectada');
});

global.db = db;
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server en http://localhost:${PORT}`);
});
// Routes
app.get('/', (req, res) => {
    res.send('Backend corriendo');
});

const express = require('express');
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuarios');
const mascotasRoutes = require('./routes/mascotas');
const historialRoutes = require('./routes/historial');
const serviciosRoutes = require('./routes/servicios');
const turnosRoutes = require('./routes/turnos');
const productosRoutes = require('./routes/productos');
const comprasRoutes = require('./routes/compras');

const app = express();
app.use(bodyParser.json());

app.use('/usuarios', usuariosRoutes);
app.use('/mascotas', mascotasRoutes);
app.use('/historial', historialRoutes);
app.use('/servicios', serviciosRoutes);
app.use('/turnos', turnosRoutes);
app.use('/productos', productosRoutes);
app.use('/compras', comprasRoutes);


