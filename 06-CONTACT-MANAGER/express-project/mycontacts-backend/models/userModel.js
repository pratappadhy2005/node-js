const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please add the user name"] },
    email: { type: String, required: [true, "Please add the user email"], unique: [true, "Email address already taken"] },
    password: { type: String, required: [true, "Please add the user password"] },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;