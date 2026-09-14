// Librería importada
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Definición de película
const movieSchema = new Schema(
  {
    title: { type: String, required: true },  
    director: { type: String, required: true },  
    year: { type: Number },                    
    genre: { type: String, required: true },     
  },
  {
    timestamps: true,  
  }
);
// Creación y exportación de modelo
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;