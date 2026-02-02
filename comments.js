// Create web server


const http = require('http');const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}); 
// End of web server code
// This is a simple HTTP server that responds with "Hello, World!" to any request.