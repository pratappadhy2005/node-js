const mongoose = require("mongoose");

async function connectToDatabase(url) {
    try {
        return await mongoose.connect(url);
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
}

module.exports = { connectToDatabase };