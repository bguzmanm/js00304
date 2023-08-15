require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// models
db.film = require("./films.model")(sequelize, Sequelize);
db.user = require("./users.model")(sequelize, Sequelize);

module.exports = db;