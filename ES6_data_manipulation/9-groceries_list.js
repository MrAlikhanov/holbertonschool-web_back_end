/**
 * Returns a Map of groceries with names and quantities.
 * @returns {Map<string, number>}
 */
export default function groceriesList() {
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceries;
}
