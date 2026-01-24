const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.end('Hello World!');
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Create a hello endpoint
server.on('request', (req, res) => {
    if (req.url === '/hello') {
        res.end('Hello Pratap!');
    }
});
