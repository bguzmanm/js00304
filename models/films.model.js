const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {

  const Film = sequelize.define("films", {
    filmId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'film_id',
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'title',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'description',
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'release_year',
    },
    rentalDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rental_duration',
    },
    rentalRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'rental_rate',
    },
    rating: {
      type: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'),
      allowNull: true,
      field: 'rating',
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'language_id'
    }
  }, {
    timestamps: false,
    tableName: 'film',
  });
  return Film;
}