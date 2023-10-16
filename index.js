const http = require('node:http');
const fs = require('node:fs');
const router = require('./routes/categories'); // import from categories so the route setting takes place first?

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    if (req.url.substring(req.url.length - 4) === '.css') {
        res.setHeader('Content-Type', 'text/css');
        const file = fs.readFileSync('public/stylesheets/categories.css', { encoding: 'utf-8' });
        res.end(file);
        return;
    }
    
    router.route(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});