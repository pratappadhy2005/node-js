const express = require("express");
const dotenv = require("dotenv").config();
const contactRoute = require("./routes/contactRoute");
const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/contacts", contactRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});