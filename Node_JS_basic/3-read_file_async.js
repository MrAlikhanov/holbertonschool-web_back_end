const fs = require('fs');

/**
 * Reads a student database CSV file asynchronously and logs stats.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        // If file cannot be read, reject the promise with the specific error message
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split content into lines and filter out empty or whitespace-only lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Remove the header line
      const header = lines.shift();
      if (!header) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const fields = {};
      let totalStudents = 0;

      for (const line of lines) {
        const studentData = line.split(',');

        // Validate that the row has all required student columns
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

      // Log total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Log the breakdown per field using structural keys for deterministic ordering
      const sortedFields = Object.keys(fields);
      for (const field of sortedFields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }

      // Resolve the promise once everything is successfully processed and logged
      resolve();
    });
  });
}

module.exports = countStudents;
