const express = require("express");
const router = express.Router();
const { loginUser, getCurrentUser, registerUser } = require("../controllers/userController");

router.post("/login", loginUser);

router.get("/current", getCurrentUser);

router.post("/register", registerUser);

module.exports = router;