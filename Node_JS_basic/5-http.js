const http = require('http');
const fs = require('fs');

const PORT = 1245;
const DB_FILE = process.argv[2];

/**
 * Asynchronously processes the CSV database file and returns 
 * the formatted student statistics as a string.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<string>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift();
      if (!header) {
        resolve('Number of students: 0');
        return;
      }

      const fields = {};
      let totalStudents = 0;

      for (const line of lines) {
        const studentData = line.split(',');
        if (studentData.length >= 4) {
          const firstName = studentData[0].trim();
          const field = studentData[3].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
          totalStudents += 1;
        }
      }

      // Compile the final string output instead of console.logging directly
      let output = `Number of students: ${totalStudents}`;
      
      const sortedFields = Object.keys(fields);
      for (const field of sortedFields) {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }

      resolve(output);
    });
  });
}

// Create the HTTP server routing system
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    
    // Call our promise-based file parser
    countStudents(DB_FILE)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.end('Not Found');
  }
});

// Start the server
app.listen(PORT);

module.exports = app;
