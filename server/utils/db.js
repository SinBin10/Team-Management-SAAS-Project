const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.connect(URI);
    console.log("database connected...");
  } catch (error) {
    console.log("Error during database connection", error);
  }
};

module.exports = connectDB;
