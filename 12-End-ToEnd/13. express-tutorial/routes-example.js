const express = require('express');

const app = express();

app.get('/example', (req, res) => {
    res.send("Example Page");
});

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Product 1"
        },
        {
            id: 2,
            name: "Product 2"
        }
    ];
    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const productId = req.params.id;
    const products = [
        {
            id: 1,
            name: "Product 1"
        },
        {
            id: 2,
            name: "Product 2"
        }
    ];
    const product = products.find((p) => p.id === parseInt(productId));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send(`Product with id ${productId} not found`);
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
