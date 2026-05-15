/**
 * Calculates the sum of all student IDs.
 * @param {Array} students - The list of student objects.
 * @returns {Number} The total sum of the IDs.
 */
export default function getStudentIdsSum(students) {
  // We initialize the accumulator (sum) at 0
  return students.reduce((sum, student) => sum + student.id, 0);
}
