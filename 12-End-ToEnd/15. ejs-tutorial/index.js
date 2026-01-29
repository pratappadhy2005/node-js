const express = require('express');
const path = require('path');

const app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');

//set the views directory
app.set('views', path.join(__dirname, 'views'));

const products = [
    {
        id: 1,
        name: "Product 1"
    },
    {
        id: 2,
        name: "Product 2"
    },
    {
        id: 3,
        name: "Product 3"
    }
];

app.get('/', (req, res) => {
    res.render('home', { products });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});