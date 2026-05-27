const fs = require('fs');

/**
 * Reads a student database CSV file synchronously and logs stats.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read file synchronously with UTF-8 encoding
    const data = fs.readFileSync(path, 'utf-8');
    
    // Split the content into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // Remove the header line (firstname, lastname, age, field)
    const header = lines.shift();
    if (!header) {
      console.log('Number of students: 0');
      return;
    }

    const fields = {};
    let totalStudents = 0;

    for (const line of lines) {
      const studentData = line.split(',');
      
      // Ensure the row has the expected number of columns
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

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the breakdown per field
    for (const [field, studentsList] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}`);
    }

  } catch (error) {
    // Throw the required error if the file cannot be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
