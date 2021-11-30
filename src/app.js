const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome!');
        res.end();
    }

    if (req.url === '/about') {
        res.end('About!');
    }

    res.end('<h1>oops!</h1>');
});

server.listen(5000);