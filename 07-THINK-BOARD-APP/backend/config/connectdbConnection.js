import mongoose from "mongoose";

const dbconnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to the database", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
}

export default dbconnection;