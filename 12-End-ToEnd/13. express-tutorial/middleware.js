const express = require('express');
const app = express();

const myFirstMiddleware = (req, res, next) => {
    console.log("This middleware will run before the request is processed");
    next();
}

app.use(myFirstMiddleware);

app.get("/example", (req, res) => {
    res.send("Example Page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});