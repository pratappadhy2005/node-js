const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});