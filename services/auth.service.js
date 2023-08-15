const db = require("../models");
const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = db.user;
const Op = db.Sequelize.Op;

require("dotenv").config();

exports.signUp = async (username, password, firstName, lastName, email) => {
  try {
    const salt = await bcryptjs.genSalt(Number.parseInt(process.env.SALT));
    const hashedPassword = await bcryptjs.hash(password, salt);
    const result = await User.create({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email,
    });

    return result;

  } catch (error) {
    console.error(error);
    return ({
      error: error.code || 500,
      message: error.message || 'Some error ocurred while singUp'
    });
  }
};

exports.signIn = async (username, password) => {
  try {
    const foundUser = await User.findOne({
      where: { username },
    });

    if (!foundUser) {
      return ({
        code: 404,
        message: 'user not found',
      });
    }

    const correctPassword = await bcryptjs.compare(password, foundUser.password);
    if (!correctPassword) {
      return ({
        code: 400,
        message: "password wrong",
      });
    }

    const payload = { user: { userId: foundUser.userId } };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 3600000 })

    return ({ token });

  } catch (error) {
    console.error(error);
    return ({
      error: error.code || 500,
      message: error.message || 'Som error ocurred while signIn'
    })
  }
};