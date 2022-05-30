const express = require('express');
const mysql = require('mysql');

const pizzapredeterminada = require('./routes/pizza');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/pizza', pizzapredeterminada);

app.listen(port, () => {
   console.log(`API REST OK y escuchando en el puerto ${port}....`);
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pizzeria_db',
    port: 3306
});

connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });

