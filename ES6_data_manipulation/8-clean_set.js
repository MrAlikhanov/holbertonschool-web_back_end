/**
 * Returns a string of set values that start with a specific string, 
 * with the prefix removed.
 * @param {Set} set - The set of strings to process.
 * @param {String} startString - The prefix to look for.
 * @returns {String} A string of values separated by '-'.
 */
export default function cleanSet(set, startString) {
  // If startString is empty or not a string, return an empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  for (const value of set) {
    // Ensure the value is a string and starts with the prefix
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Append the part of the string after the prefix
      parts.push(value.slice(startString.length));
    }
  }

  // Join the parts using '-'
  return parts.join('-');
}
