require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routers/auth-router");
const connectDB = require("./utils/db");

app.use("/", router);

const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
  });
});
