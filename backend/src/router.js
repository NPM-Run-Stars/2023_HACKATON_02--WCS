const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const localisationControllers = require("./controllers/localisationControllers");

const { hashPassword } = require("./services/auth");
const { checkUserData } = require("./services/checkUserData");
const { checkUser, checkAdmin } = require("./services/jwt");

router.get("/localisation", localisationControllers.browse);
router.post("/signin", checkUserData, authControllers.signin);

router.use(checkUser);

router.use(checkAdmin);
router.post("/signup", checkUserData, hashPassword, authControllers.signup);

module.exports = router;
