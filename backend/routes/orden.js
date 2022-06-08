const express = require('express');
const ruta = express.Router();

const connection = require('../connection');

ruta.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM orden';
        const ordenes = await connection.query(query);

        res.send(ordenes);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.post('/nueva_orden', async (req, res) => {
    try {
        const query = 'INSERT INTO orden (total) VALUES (0)';
        const respuesta = await connection.query(query);
        let id = respuesta.insertId;
        const query2 = 'SELECT * FROM orden WHERE id_orden = ' + id;
        const orden = await connection.query(query2);
        res.send(orden);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;