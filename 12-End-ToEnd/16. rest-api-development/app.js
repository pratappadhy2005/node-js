const express = require('express');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
];

//GET /books
app.get('/books', (req, res) => {
    res.json({
        message: "Books List",
        books: books
    });
});

//GET /books/:id
app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === parseInt(id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
});

//POST /books
app.post('/books', (req, res) => {
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
});

//DELETE /books/:id
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    books.splice(bookIndex, 1);
    res.json({ message: 'Book deleted successfully' });
});

//PUT /books/:id
app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    const updatedBook = req.body;
    updatedBook.id = parseInt(id);
    books[bookIndex] = updatedBook;
    res.json(updatedBook);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
