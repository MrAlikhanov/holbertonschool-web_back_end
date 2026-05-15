/**
 * Filters a list of students by a specific location.
 * @param {Array} students - The list of student objects.
 * @param {String} city - The city to filter by.
 * @returns {Array} An array of students located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  // Ensure students is an array before filtering
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((student) => student.location === city);
}
