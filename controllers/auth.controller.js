const service = require("../services/auth.service");

exports.singUp = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'content cant be empty' });
  }

  const { username, password, firstName, lastName, email } = req.body;
  const result = await service.signUp(username, password, firstName, lastName, email);
  if (result?.error !== undefined) {
    return res.status(result.error).json({ message: result.message });
  }
  return res.status(201).json(result);
}

exports.singIn = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'content cant be empty' });
  }
  const { username, password } = req.body;
  const result = await service.signIn(username, password);
  if (result?.error !== undefined) {
    return res.status(result.error).json({ message: result.message });
  }
  return res.status(200).json(result);
}