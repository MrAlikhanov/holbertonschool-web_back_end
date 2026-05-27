const express = require('express');
const fs = require('fs');

const app = express();
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

      let output = `Number of students: ${totalStudents}`;
      const sortedFields = Object.keys(fields);
      for (const field of sortedFields) {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }

      resolve(output);
    });
  });
}

// Route for the root path
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Route for the students path
app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  
  countStudents(DB_FILE)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

// Start listening on the specified port
app.listen(PORT);

module.exports = app;
