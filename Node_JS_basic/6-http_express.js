const express = require('express');

const app = express();
const PORT = 1245;

// Define a route for the root endpoint (/)
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the app listen on port 1245
app.listen(PORT);

// Export the app instance
module.exports = app;
