const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    try {
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
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
