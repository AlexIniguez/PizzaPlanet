const express = require('express');
const ruta = express.Router();

const connection = require('../connection');

ruta.get('/:idOrden', async (req, res) => {
    try {
        const query = `SELECT * FROM pedidoPersonalizado WHERE idOrden = ${req.params.idOrden}`;
        const pizzas = await connection.query(query);

        res.send(pizzas);
    } catch (error) {
        console.log("error : ", error)
        return res.json({
            error: error
        });
    }
});

ruta.post('/', async(req, res) => {
    try {
        values = [req.body.idPizzaPer, req.body.idOrden, req.body.cantidad, req.body.idTamanio, req.body.subtotal];
        const query = 'INSERT INTO pedidoPersonalizado (idPizzaPer, idOrden, cantidad, idTamanio, subtotal) VALUES (?)' ;
        await connection.query(query, [values]);
        res.json("Pedido Satisfactorio");

    } catch (error) {
        console.log("error : ", error)
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;