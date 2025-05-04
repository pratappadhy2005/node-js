const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    res.send('About: ' + req.query.name);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});