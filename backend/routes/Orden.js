const express = require('express');
const ruta = express.Router();

const connection = require('../connection');

ruta.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM orden';
        const pizzas = await connection.query(query);

        res.send(pizzas);
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.post('/', async (req, res) => {
    try {
        var ahora = Date.now();
        var reloj = new Date(ahora);
        var hora = reloj.getHours();
        var minutos = reloj.getMinutes();
        var segundos = reloj.getSeconds();
        var anio= reloj.getFullYear();
        var mes = reloj.getMonth()+1;
        var dia = reloj.getDate();
        var time = hora+":"+ minutos +":" + segundos;
        var fecha = anio+"-"+mes+"-"+dia;
        let orden = [fecha, time, req.body.total]
        const query = 'INSERT INTO orden(fecha, hora, total) VALUES(?)';
        const respuesta = await connection.query(query, [orden]);
        let id = respuesta.insertId;
        const query2 = `SELECT * FROM orden WHERE id_orden = ${id}`;
        const ordenNueva = await connection.query(query2);
        res.json(ordenNueva);

    } catch (error) {
        console.log("error: ", error)
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;