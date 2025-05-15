const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");


//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error("User not found");
    }
    if (user.password !== password) {
        res.status(400);
        throw new Error("Invalid password");
    }
    res.status(200).json(user);
})

//@desc get current user
//@route GET /api/users/current
//@access public
const getCurrentUser = asyncHandler(async (req, res) => {

    res.status(200).json(req.user);
})

//@desc Create new user
//@route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    console.log("The request body is:", req.body);
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    const user = await User.create({
        name,
        email,
        password,
    });
    console.log(`User created ${user}`);
    res.status(201).json(user);
})

module.exports = {
    loginUser,
    getCurrentUser,
    registerUser,
};

