const express = require('express');
const ruta = express.Router();

const connection = require('../connection');

ruta.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM ingrediente';
        const ingredientes = await connection.query(query);

        res.send(ingredientes);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;