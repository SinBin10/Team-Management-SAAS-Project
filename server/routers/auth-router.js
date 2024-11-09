const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth-controller");

router.route("/login").get(login);
router.route("/register").post(register);

module.exports = router;
