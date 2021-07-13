const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

//Funció para conectar base de datos
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB conectada');
    } catch (error) {
        console.log('DB NO! conectada');
        console.log(error);
        process.exit(1); //Detener la app
    };
};

module.exports = conectarDB;