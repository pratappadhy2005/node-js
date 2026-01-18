const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    // Validate request body
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            timestamps: user.timestamps
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
    res.status(200).json({ message: "User registered successfully" });
});

// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error("User not found");
    }
    // Check if password matches
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        res.status(400);
        throw new Error("Invalid password");
    }
    res.status(200).json({ message: "User logged in successfully" });
});

// @desc Logout a user
// @route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    // Clear session or token
    req.session.destroy((err) => {
        if (err) {
            res.status(400);
            throw new Error("Error logging out");
        }
    });
    res.status(200).json({ message: "User logged out successfully" });
});

// @desc Get current user
// @route GET /api/users/current
// @access Private
const getCurrentUser = asyncHandler(async (req, res) => {
    // Get user from session or token
    const user = req.user;
    if (!user) {
        res.status(400);
        throw new Error("User not found");
    }
    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        timestamps: user.timestamps
    });
});

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser
}
