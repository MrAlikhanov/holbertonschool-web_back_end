/**
 * Extracts IDs from an array of student objects.
 * @param {Array} list - An array of student objects.
 * @returns {Array} An array of IDs or an empty array if input is invalid.
 */
export default function getListStudentIds(list) {
  // Check if the argument is an array
  if (!Array.isArray(list)) {
    return [];
  }

  // Use map to extract only the id property
  return list.map((student) => student.id);
}
