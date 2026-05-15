/**
 * Updates quantities in a map: items with a quantity of 1 are updated to 100.
 * @param {Map} map - The map of items to update.
 * @throws {Error} Cannot process if the argument is not a map.
 */
export default function updateUniqueItems(map) {
  // Check if the argument is an instance of Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map and update values in place
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
