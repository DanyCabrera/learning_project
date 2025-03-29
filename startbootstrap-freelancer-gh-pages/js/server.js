const express = require('express');
const cors = require('cors');
const connection = require('./bd'); // Asegúrate de tener tu archivo de conexión MySQL
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Habilitar CORS
app.use(cors());

// Ruta para agregar un nombre
app.post('/agregar', (req, res) => {
    const { nombre } = req.body;

    console.log("Recibido nombre:", nombre); // Agregar para depuración

    if (!nombre) {
        return res.status(400).json({ mensaje: 'El nombre es obligatorio' });
    }

    // Verificar si el nombre ya está registrado
    const query = 'SELECT * FROM usuario WHERE nombreUsuario = ?';
    connection.query(query, [nombre], (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return res.status(500).json({ mensaje: 'Error al verificar el nombre' });
        }

        console.log("Resultado de la consulta:", results); // Agregar para depuración

        // Si el nombre ya está registrado
        if (results.length > 0) {
            return res.status(400).json({ mensaje: 'El nombre ya está registrado' });
        }

        // Insertar el nombre si no está registrado
        const insertQuery = 'INSERT INTO usuario (nombreUsuario) VALUES (?)';
        connection.query(insertQuery, [nombre], (err, result) => {
            if (err) {
                console.error('Error al insertar el nombre:', err);
                return res.status(500).json({ mensaje: 'Error al insertar el nombre' });
            }
            console.log("Nombre insertado con éxito"); // Agregar para depuración
            res.json({ mensaje: 'Nombre registrado con éxito' });
        });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
