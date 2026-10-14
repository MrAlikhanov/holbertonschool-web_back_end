const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};

      students.forEach((line) => {
        const columns = line.split(',');
        const firstname = columns[0];
        const field = columns[columns.length - 1];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      const output = [`Number of students: ${students.length}`];
      Object.keys(fields).forEach((field) => {
        output.push(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
        );
      });

      resolve(output.join('\n'));
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).set('Content-Type', 'text/plain').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const title = 'This is the list of our students\n';
  res.status(200).set('Content-Type', 'text/plain');

  countStudents(process.argv[2])
    .then((result) => {
      res.send(`${title}${result}`);
    })
    .catch((err) => {
      res.send(`${title}${err.message}`);
    });
});

app.listen(port);

module.exports = app;
