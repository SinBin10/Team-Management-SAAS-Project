const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth-controller");

router.route("/login").get();
router.route("/register").post(register);

module.exports = router;
