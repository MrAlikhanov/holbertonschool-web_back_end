/**
 * Checks if all elements of an array exist within a set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of values to look for.
 * @returns {Boolean} True if all elements exist in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  // .every returns true only if the callback returns true for all elements
  return array.every((value) => set.has(value));
}
