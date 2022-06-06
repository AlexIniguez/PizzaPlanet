const express = require('express'); // importa express
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Se le dice a express que use este middleware
app.use(express.urlencoded({extended: true}));

app.use('/pizzaPredeterminada', require('./routes/pizzaPredeterminada'));
app.use('/pizzaPersonalizada', require('./routes/pizzaPersonalizada'));
app.use('/receta', require('./routes/Receta'));
app.use('/orden', require('./routes/Orden'));
app.use('/pedidoPersonalizado', require('./routes/PedidoPersonalizado'))

app.get('/', (req, res) => {
    res.send("GET desde app.js");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}.`);
});