const express = require('express');
const ruta = express.Router();

ruta.get('/', (req, res) => {
    res.json('Holaaa');
})

module.exports = ruta;