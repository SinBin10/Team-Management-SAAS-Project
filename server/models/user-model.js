const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcryptjs.genSalt(10);
    console.log("password before hashing", this.password);
    this.password = await bcryptjs.hash(this.password, salt);
    console.log("password after hashing", this.password);
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

const User = mongoose.model("User", userSchema);

module.exports = User;
