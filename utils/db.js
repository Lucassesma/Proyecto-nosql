const mongoose = require('mongoose');
const urlDb = 'mongodb://localhost:27017/proyecto-movies'; //Dirección DB
// Función para conectar, lo intenta, si va bien lo pone, y si va mal también
const connect = async () => {
    try {
        await mongoose.connect(urlDb);
        console.log('Conectado a la base de datos correctamente');
    } catch (error) {
        console.log('Error al conectar con la base de datos');
    }
};

module.exports = { connect };
