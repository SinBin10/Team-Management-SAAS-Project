const User = require("../models/user-model");
const login = () => {};
const register = async (req, res) => {
  console.log(req.body);
  const { fullname, email, password } = req.body;
  let user = await User.create({ fullname, email, password });
  res.status(201).send({
    msg: "registeration successful",
    token: await user.generateToken(),
    userId: user._id,
  });
};

module.exports = { login, register };
