const express = require('express');
const app = express();

const requestTimeStamp = (req, res, next) => {
    req.requestTime = Date.now();
    console.log("Request Time: ", req.requestTime);
    next();
}

app.use(requestTimeStamp);

app.get("/example", (req, res) => {
    res.send(`Example Page. Request Time: ${req.requestTime}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});