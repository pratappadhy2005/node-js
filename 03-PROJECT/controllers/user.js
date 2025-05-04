const User = require("../models/user");

async function getAllUsers(req, res) {
    const users = await User.find({});
    return res.json(users);
}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
}

async function createUser(req, res) {
    const users = await User.find({});
    const body = req.body;

    const user = {
        id: users.length + 1,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    }

    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const result = await User.create(user);

    console.log('result', result);

    return res.status(201).json(user);
}

async function updateUser(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
}

async function deleteUser(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.json({ message: "User deleted successfully" });
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };