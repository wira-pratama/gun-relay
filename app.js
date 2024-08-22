const GUN = require('gun');
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('This is a Gun.js Relay for gunfp');
    res.end();
}).listen(8080);
const gun = GUN({web: server});