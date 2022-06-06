const express = require('express');
const ruta = express.Router();

const connection = require('../connection');

ruta.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM tamanioPizza';
        const tamanios = await connection.query(query);

        res.send(tamanios);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;