const GUN = require('gun');
const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('This is a Gun.js Relay for gunfp');
//     res.end();
// }).listen(8080);

http.createServer((request, response) => {
    request.on('error', (err) => {
        console.error(err);
    }).on('end', () => {
        response.on('error', (err) => {
            console.error(err);
        });

        response.writeHead(200, {
            "Content-Security-Policy": "default-src *"
        });

        response.end("<html><body><h1>Hello, Security Headers!</h1></body></html>");
    });
}).listen(8080);
const gun = GUN({ web: server });