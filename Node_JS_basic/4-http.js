const http = require('http');

const PORT = 1245;

// Create the server instance
const app = http.createServer((req, res) => {
  // Set the response status and content type header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the body response and close the connection
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(PORT);

// Export the server instance
module.exports = app;
