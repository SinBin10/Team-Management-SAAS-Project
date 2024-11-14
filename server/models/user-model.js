const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    // bcryptjs.genSalt(10, (err, salt) => {
    //   bcryptjs.hash(this.password, salt, (err, hash) => {
    //     this.password = hash;
    //   });
    // });
    next();
  } catch (error) {
    console.log(error);
  }
});

userSchema.methods.generateToken = async function () {
  return jwt.sign(
    {
      userId: this._id,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;
