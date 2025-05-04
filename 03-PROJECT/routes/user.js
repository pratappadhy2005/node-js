const express = require("express");
const User = require("../models/user");
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/user");

//REST API
router
    .route("/")
    .get(getAllUsers)
    .post(createUser);

router
    .route("/:id")
    .get(getUserById)
    .put(updateUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;