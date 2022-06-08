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
        await connection.query(query);
        res.send('Orden creada');
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;