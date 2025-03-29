const mysql = require("mysql2");

// Configuración de la conexión
const connection = mysql.createConnection({
    host: "localhost",   // O la IP del servidor
    user: "root",        // Tu usuario de MySQL
    password: "2024dany.C",  // Tu contraseña de MySQL
    database: "gualingo",    // Nombre de la base de datos
});

// Conectar a MySQL
connection.connect((err) => {
    if (err) {
        console.error("Error de conexión:", err);
        return;
    }
    console.log("Conectado a la base de datos");
});

// Exportar la conexión
module.exports = connection;
