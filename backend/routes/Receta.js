const { json } = require('express');
const express = require('express');
const ruta = express.Router();

const connection = require('../connection');

ruta.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM receta';
        const pizzas = await connection.query(query);

        res.send(pizzas);
    } catch (error) {
        console.log("error : ", error)
        return res.json({
            error: error
        });
    }
});

ruta.get('/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM receta WHERE idPizzaPer = ${req.params.id} `;
        const pizzas = await connection.query(query);

        res.send(pizzas);
    } catch (error) {
        console.log("error : ", error)
        return res.json({
            error: error
        });
    }
});


ruta.post('/:idPizzaPersonalizada', async(req, res) => {
    try {
        
       let id = Number(req.params.idPizzaPersonalizada);
       let values = [];
       for (let i in req.body)
       {
           
            let valorB = [id, Number(Object.values(req.body[i]))];
            values.push(valorB);
       }

       const query = 'INSERT INTO receta (idPizzaPer, idIngrediente) VALUES ?';
       const respuesta = await connection.query(query, [values]);

       res.json({"Numero de columnas afectadas: " : respuesta.affectedRows})


    } catch (error) {
        console.log("error : ", error)
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;