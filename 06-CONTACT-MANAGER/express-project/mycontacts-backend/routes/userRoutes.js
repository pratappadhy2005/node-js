const express = require("express");
const router = express.Router();
const { loginUser, getCurrentUser, registerUser } = require("../controllers/userController");
const validateTokenHandler = require("../middleware/validateTokenHandler");

router.post("/login", loginUser);

router.get("/current", validateTokenHandler, getCurrentUser);

router.post("/register", registerUser);

module.exports = router;