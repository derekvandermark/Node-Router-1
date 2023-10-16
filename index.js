const http = require('node:http');
const router = require('./routes/categories'); // import from categories so the route setting takes place first?

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    router.route(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

// server.on('request', (req, res) => {

//     console.log("We in heya")

//     const url = new URL(req.url, `http://${req.headers.host}`);

//     if (req.method === 'GET') {

//         if (url.pathname === '/page1') {
//             // res.statusCode = 200;
//             // res.setHeader('Content-Type', 'text/plain');
//             res.end('Page 1\n');
//         }

//         if (url.pathname === '/page2') {
//             // res.statusCode = 200;
//             // res.setHeader('Content-Type', 'text/plain');
//             res.end('Page 2\n');
//         }

//         if (url.pathname === '/page3') {
//             // res.statusCode = 200;
//             // res.setHeader('Content-Type', 'text/plain');
//             res.end('Page 3\n');
//         }
//     }
// });

// const postData = JSON.stringify({
//     msg: 'Whiteface Mountain'
// });

// const options = {
//     hostname: 'www.google.com',
//     port: 80,
//     path: '/upload',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': Buffer.byteLength(postData)
//     }
// }

// const req = http.request(options, (res) => {
//     let rawData = '';
//     res.on('data', (chunk) => {
//         rawData += chunk;
//     });
//     res.on('end', () => {
//         try {
//             //const parsedData = JSON.parse(rawData);
//             //console.log("Raw Data\n", rawData);
//         } catch(e) {
//             console.error(e.message);
//         }
//     })
// });

// req.write(postData);
// req.end();