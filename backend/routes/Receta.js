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

// ruta.get('/:id', async (req, res) => {
//     try {
//         const query = `SELECT idIngrediente FROM receta WHERE idPizzaPer = ${req.params.id} `;
//         const pizzas = await connection.query(query);
//         const results = JSON.parse(JSON.stringify(pizzas))
//         const array = []
        
//         for(i in results)
//         {
//             const query2 = `SELECT nombre FROM ingrediente WHERE id_ingrediente = ${Object.values(results[i])} `;
//             let obj = await connection.query(query2);
//             let obj2 = JSON.parse(JSON.stringify(obj))
//             array.push(obj2[0]);
//         }
//         res.send(array);
//     } catch (error) {
//         console.log("error : ", error)
//         return res.json({
//             error: error
//         });
//     }
// });

ruta.get('/:id', async(req, res) => {
    try {
        const query = 'SELECT * FROM receta WHERE idPizzaPer = ?';
        const recetas = await connection.query(query, [req.params.id]);
        console.log(recetas)
        res.send(recetas)
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

ruta.post('/', async(req, res) => {
    try {
        const body = req.body;
        const query = 'INSERT INTO receta (idPizzaPer, idIngrediente) VALUES (?, ?)';
        body.ingredientes.forEach(async (element) => {
            await connection.query(query, [body.idPizzaPer, element]);
        });
        res.send("Receta agregada");
    } catch (error) {
        return res.json({
            error: error
        });
    }
});

module.exports = ruta;