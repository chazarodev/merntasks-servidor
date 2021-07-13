const express = require('express');
const conectarDB = require('./config/db')

//crear el servidor 
const app = express();

//Conectar a la base de datos
conectarDB();

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
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}` );
});