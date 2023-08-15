const service = require("../services/films.service");

exports.findAll = async (req, res) => {
  const result = await service.findAll();
  if (result.error !== undefined) {
    res.status(result.error).json({ message: result.message });
  }
  res.status(200).json(result);
};

exports.findOne = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ message: 'content can not be empty' });
  }
  const id = req.params.id;
  const result = await service.findOne(id);
  if (result === null) {
    return res.status(404).send({ message: "not found" });
  }
  if (result?.error !== undefined) {
    return res.status(result.error).json({ message: result.message });
  }
  return res.status(200).json(result);
}

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: 'content can not be empty' });
  }
  const { title, description, releaseYear, rentalDuration, rentalRate, rating, languageId, } = req.body;
  const result = service.create(title, description, releaseYear, rentalDuration, rentalRate, rating, languageId);
  if (result.error !== undefined) {
    res.status(result.error).json({ message: result.message });
  }
  res.status(200).json(result);
}

exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: 'content can not be empty' });
  }
  const { filmId, title, description, releaseYear, rentalDuration, rentalRate, rating, languageId, } = req.body;
  const result = service.update(filmId, title, description, releaseYear, rentalDuration, rentalRate, rating, languageId);
  if (result.error !== undefined) {
    res.status(result.error).json({ message: result.message });
  }
  res.status(200).json(result);
}

exports.delete = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ message: 'content can not be empty' });
  }
  const id = req.params.id;
  const result = await service.delete(id);
  if (result.error !== undefined) {
    res.status(result.error).json({ message: result.message });
  }
  res.status(200).json(result);
}