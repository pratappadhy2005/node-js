const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECT_DB);
        console.log(`Database connected successfully: ${connect.connection.host}`);
    } catch (error) {
        console.log("Database connection failed");
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;