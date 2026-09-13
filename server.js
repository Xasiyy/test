const http = require('node:http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from sandbox!');
}).listen(3000, () => {
    console.log('listening on 3000');
});
