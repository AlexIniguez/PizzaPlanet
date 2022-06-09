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

ruta.post('/nuevo_pedido', async (req, res) => {
    try {
        const body = req.body;
        const query = 'INSERT INTO pedidopredeterminado (idPizzaPre, idOrden, cantidad, idTamanio, subtotal) VALUES (?,?,?,?,?)' 
        await connection.query(query, [body.id_pizzaPre, body.idOrden, body.cantidad, body.idTamanio, body.subtotal]);

        res.json('Pedido agregado exitosamente')
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.get('/id_to_datos/:id_pizzaPre/:idTamanio', async (req, res) => {
    try {
        const body = req.params;
        const query = 'SELECT pizzapredeterminada.nombre  as p_nombre, tamaniopizza.nombre FROM pizzapredeterminada, tamaniopizza WHERE id_pizzaPre=? AND id_tamanio=?';
        const data = await connection.query(query, [body.id_pizzaPre, body.idTamanio]);
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