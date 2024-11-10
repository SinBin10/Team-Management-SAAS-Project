const User = require("../models/user-model");
const login = () => {};
const register = async (req, res) => {
  console.log(req.body);
  const { fullname, email, password } = req.body;
  let user = await User.create({ fullname, email, password });
  res.send(user);
};

module.exports = { login, register };
