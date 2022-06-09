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

ruta.post('/nuevo_pedido', async (req, res) => {
    try {
        const body = req.body;
        const query = 'INSERT INTO pedidoPersonalizado (idPizzaPer, idOrden, cantidad, idTamanio, subtotal) VALUES (?,?,?,?,?)' 
        await connection.query(query, [body.idPizzaPer, body.idOrden, body.cantidad, body.idTamanio, body.subtotal]);

        res.json('Pedido agregado exitosamente')
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.get('/ultima_orden', async (req, res) => {
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

ruta.get('/id_to_datos/:id_pizzaPer/:idTamanio', async (req, res) => {
    try {
        const body = req.params;
        const query = 'SELECT id_pizzaPer, nombre FROM pizzaPersonalizada, tamanioPizza WHERE id_pizzaPer = ? AND id_tamanio = ?';
        const data = await connection.query(query, [body.id_pizzaPer, body.idTamanio]);
        res.send(data);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.get('/total/:idOrden', async (req, res) => {
    try {
        const body = req.params.idOrden;
        const query = 'SELECT SUM(subtotal) AS suma FROM pedidoPersonalizado WHERE idOrden = ?';
        const total = await connection.query(query, [body]);
        res.send(total[0]);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;