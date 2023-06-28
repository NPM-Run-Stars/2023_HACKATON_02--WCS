const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");

const { hashPassword } = require("./services/auth");
const { checkUserData } = require("./services/checkUserData");

router.post("/signup", checkUserData, hashPassword, authControllers.signup);
router.post("/signin", checkUserData, authControllers.signin);

module.exports = router;
