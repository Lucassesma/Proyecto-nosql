const mongoose = require('mongoose');
const Movie = require('../models/movie');

const movies = [
  { title: 'The Matrix', director: 'Hermanas Wachowski', year: 1999, genre: 'Acción' },
  { title: 'The Matrix Reloaded', director: 'Hermanas Wachowski', year: 2003, genre: 'Acción' },
  { title: 'Buscando a Nemo', director: 'Andrew Stanton', year: 2003, genre: 'Animación' },
  { title: 'Buscando a Dory', director: 'Andrew Stanton', year: 2016, genre: 'Animación' },
  { title: 'Interestelar', director: 'Christopher Nolan', year: 2014, genre: 'Ciencia ficción' },
  { title: '50 primeras citas', director: 'Peter Segal', year: 2004, genre: 'Comedia romántica' },
];
const movieDocuments = movies.map(movie => new Movie(movie));    // convierte cada película en documento modelo
// Conecta, vacia si hace falta, inserta y desconecta
mongoose
  .connect('mongodb://localhost:27017/proyecto-movies')
  .then(async () => {
    const allMovies = await Movie.find();
    if (allMovies.length) {
      await Movie.collection.drop();
    }
  })
  .catch((err) => console.log(`Error borrando datos: ${err}`))
  .then(async () => {
    await Movie.insertMany(movieDocuments);
    console.log('Base de datos creada');
  })
  .catch((err) => console.log(`Error creando datos: ${err}`))
  .finally(() => mongoose.disconnect());