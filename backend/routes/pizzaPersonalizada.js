const { json } = require('express');
const express = require('express');
const ruta = express.Router();

const connection = require('../connection');


ruta.post('/', async(req, res) => {
    try {
        const body = req.body;
        const query = 'INSERT INTO pizzaPersonalizada (precio, masa) VALUES (?, ?)' ;
        const respuesta = await connection.query(query, [body.precio, body.masa]);
        let id = respuesta.insertId;
        const query2 = 'SELECT * FROM pizzaPersonalizada WHERE id_pizzaPer = ' + id;
        const pizza = await connection.query(query2);
        res.send(pizza);

    } catch (error) {
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;