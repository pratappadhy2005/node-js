const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true, enum: ["Male", "Female"] },
    job_title: { type: String, required: true }
}, { timestamps: true })

//model
const User = mongoose.model("User", userSchema);

module.exports = User;