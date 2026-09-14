const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      director: req.body.director,
      year: req.body.year,
      genre: req.body.genre,
    });

    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;              // recogemos el id de la URL
    await Movie.findByIdAndDelete(id);      // buscamos por id y borramos
    return res.status(200).json('Película eliminada');
  } catch (error) {
    return next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;                    // el id de la URL 
    const newData = req.body;                     // los datos nuevos del body
    const updatedMovie = await Movie.findByIdAndUpdate(id, newData, { new: true });
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next(error);
  }
});
module.exports = router; 