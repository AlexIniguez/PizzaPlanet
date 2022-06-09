const express = require('express');
const ruta = express.Router();

const connection = require('../connection');

ruta.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM orden';
        const id = await connection.query(query);
        res.send(id[id.length -1]);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.get('/pizzaPre/:idOrden', async (req, res) => {
    try {
        const body = req.params.idOrden;
        const query = 'SELECT piz_nombre, tam_nombre, subtotal, cantidad FROM pizzapredeterminada, tamaniopizza, pedidopredeterminado WHERE idTamanio = id_tamanio AND idOrden = ? AND idPizzaPre = id_pizzaPre;';
        const ticket = await connection.query(query, [body]);
        res.send(ticket);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.get('/pizzaPersonalizada/:idOrden', async (req, res) => {
    try {
        const body = req.params.idOrden;
        const query = 'SELECT idPizzaPer, cantidad, tam_nombre, subtotal FROM pedidoPersonalizado WHERE idOrden=? AND id_tamanio=idTamanio';
        const ticket = await connection.query(query, [body])
        console.log(ticket);
        res.send(ticket);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.get('/ingredientes/:idPizzaPer', async (req, res) => {
    try {
        const body = req.params.idPizzaPer;
        const query = 'SELECT idIngrediente FROM receta WHERE idPizzaPer=9';
        const ingredientes = await connection.query(query, [body]);

        res.send(ingredientes);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.get('/masas/:id_pizzaPer', async (req, res) => {
    try {
        const body = req.params.id_pizzaPer;
        const query = 'SELECT * FROM pizzapersonalizada WHERE id_pizzaPer=?';
        const masas = await connection.query(query, [body]);

        res.send(masas);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.get('/total/:id_orden', async (req, res) => {
    try {
        const body = req.params.id_orden;
        const query = 'SELECT SUM(subtotal) AS suma FROM pedidopredeterminado WHERE idOrden = ?';
        const total = await connection.query(query, [body]);

        res.send(total[0]);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});
module.exports = ruta;