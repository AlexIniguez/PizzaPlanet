const { json } = require('express');
const express = require('express');
const ruta = express.Router();

const connection = require('../connection');


ruta.post('/', async(req, res) => {
    try {
        values = [req.body.precio, req.body.masa];
        const query = 'INSERT INTO pizzaPersonalizada (precio, masa) VALUES (?)' ;
        const respuesta = await connection.query(query, [values]);
        let id = respuesta.insertId;
        const query2 = `SELECT * FROM PizzaPersonalizada WHERE id_pizzaPer = ${id}`;
        const pizza = await connection.query(query2);
        res.json(pizza);

    } catch (error) {
        console.log("error : ", error)
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;