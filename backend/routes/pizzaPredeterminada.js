const express = require('express');
const ruta = express.Router();

const connection = require('../connection');

ruta.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM pizzaPredeterminada';
        const pizzas = await connection.query(query);

        res.send(pizzas);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;