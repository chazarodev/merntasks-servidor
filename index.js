const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crear el servidor 
const app = express();

//Conectar a la base de datos
conectarDB();

//Habilitar Cors
app.use(cors());

//Habilitar express.json
app.use(express.json({extend: true}));

//puerto de la app
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//Definiri la página principal
// app.get('/', (req, res) => {
//     res.send('Hola mundo');
// });

//Arrancar la app
app.listen(PORT, '0.0.0.0', () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}` );
});