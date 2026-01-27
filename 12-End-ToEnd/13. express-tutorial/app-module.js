const express = require('express');

const app = express();

//application level middleware
app.set('view engine', 'ejs');

//Get method
app.get('/', (req, res) => {
    res.send("Home Page")
});

//Post method
app.post('/', (req, res) => {
    res.json({
        message: "Post Page"
    });
});

//error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
