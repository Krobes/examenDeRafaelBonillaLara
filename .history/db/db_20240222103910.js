const mongoose = require('mongoose');

const uri = "mongodb+srv://user:1234@cluster0.cjo8hse.mongodb.net/RickYMorty?retryWrites=true&w=majority";

mongoose.connect(uri, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión'));

db.once('open', () => {
    const dbName = db.name;
    console.log(`Conectado a la base de datos ${dbName}`)
});
