// raw-server.js (NO NPM needed)
const http = require('http'); //built-in module

const server = http.createServer((req, res) => {
  // req: Incoming request (method, url, headers)
  // res: Outgoing response (write, end)

  if (req.method === 'GET' && req.url === '/') {
    //manual route check
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //Manual Headers
    res.end('Hello from Raw node.js!'); // send body & close
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found : ('); //Basic Error
  }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Raw server running on http://localhost:${PORT}`);
});