const express = require("express");
const userRouter = require("./routes/user");
const { connectToDatabase } = require("./connection");
const { logger } = require("./middlewares");

const app = express();
const PORT = 3000;

//Connect to the database
connectToDatabase("mongodb://localhost:27017/users").then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Error connecting to the database", err);
});

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logger("./logs.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});