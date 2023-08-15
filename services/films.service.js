const db = require("../models");

const Film = db.film;
const Op = db.Sequelize.Op;

exports.findAll = async () => {
  try {
    return await Film.findAll();
  } catch (error) {
    console.error(error);
    return ({
      error: error.code || 500,
      message: error.message || 'Some error ocurred while retrieving films',
    });
  }
}
exports.findOne = async (id) => {
  try {
    return await Film.findByPk(id);
  } catch (error) {
    console.error(error);
    return ({
      error: error.code || 500,
      message: error.message || 'Some error ocurred while retrieving film by id',
    });
  }
}
exports.create = async (title, description, releaseYear, rentalDuration, rentalRate, rating, languageId) => {
  try {
    return await Film.create({
      title,
      description,
      releaseYear,
      rentalDuration,
      rentalRate,
      rating,
      languageId,
    })
  } catch (error) {
    console.error(error);
    return ({
      error: error.code || 500,
      message: error.message || 'Some error ocurred while create film',
    });
  }
}
exports.update = async (filmId, title, description, releaseYear,
  rentalDuration, rentalRate, rating, languageId) => {
  try {
    return await Film.update({
      title,
      description,
      releaseYear,
      rentalDuration,
      rentalRate,
      rating,
      languageId,
    }, {
      where: {
        filmId
      }
    })
  } catch (error) {
    console.error(error);
    return ({
      error: error.code || 500,
      message: error.message || 'Some error ocurred while update film',
    });
  }
}
exports.delete = async (filmId) => {
  try {
    return await Film.destroy({
      where: { filmId }
    });
  } catch (error) {
    console.error(error);
    return ({
      error: error.code || 500,
      message: error.message || 'Some error ocurred while delete a film by id',
    });
  }
}