/**
 * Updates student grades for a specific city.
 * @param {Array} students - List of student objects.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - List of grade objects { studentId, grade }.
 * @returns {Array} List of students with their updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade object for the current student
      const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        // If gradeEntry exists, use its grade; otherwise, use 'N/A'
        grade: gradeEntry ? gradeEntry.grade : 'N/A',
      };
    });
}
