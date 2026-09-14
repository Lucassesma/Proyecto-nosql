const express = require('express');
const { connect } = require('./utils/db');
const movieRoutes = require('./routes/movie.routes');

connect();

const PORT = 3000;
const server = express();

server.use(express.json());                          // ← NUEVO
server.use(express.urlencoded({ extended: false })); // ← NUEVO

server.use('/movies', movieRoutes);

// Manejador de rutas no encontradas
server.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

// Manejador central de errores
server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Error inesperado');
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});