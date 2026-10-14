const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Split into lines, drop empty ones (including trailing blank lines)
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  // First line is the header; the rest are students
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};
  for (const line of students) {
    const columns = line.split(',');
    const firstname = columns[0];
    const field = columns[columns.length - 1];

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  }

  for (const field of Object.keys(fields)) {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
    );
  }
}

module.exports = countStudents;
