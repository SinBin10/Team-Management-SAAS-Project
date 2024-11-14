require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routers/auth-router");
const connectDB = require("./utils/db");

app.use(express.json());

//why /api ? -> according to chatgpt the /api route tells that
// this some api which is related to data interaction and is part of backend instead of connecting to frontend
app.use("/api/auth", router);

const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
  });
});
