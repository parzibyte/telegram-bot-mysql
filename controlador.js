const conexion = require("./conexion")
module.exports = {
    insertar(nombre, creadoPor, timestampMensaje) {
        conexion.query
        return new Promise((resolve, reject) => {
            conexion.query(`insert into mascotas
            (nombre, creada_por, timestamp_mensaje)
            values
            (?, ?, ?)`,
                [nombre, creadoPor, timestampMensaje], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    },
    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, nombre, creada_por,timestamp_mensaje
            from mascotas`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
    eliminar(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from mascotas
            where id = ?`,
                [id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
}