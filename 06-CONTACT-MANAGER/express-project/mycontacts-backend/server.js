const express = require("express");
const dotenv = require("dotenv").config();
const contactRoute = require("./routes/contactRoute");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const dbconnection = require("./config/connectdbConnection");

dbconnection();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRoute);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});