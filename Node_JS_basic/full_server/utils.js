import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
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

      resolve(fields);
    });
  });
}

export default readDatabase;
