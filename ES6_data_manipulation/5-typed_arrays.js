/**
 * Creates an Int8 Typed Array within an ArrayBuffer.
 * @param {Number} length - The size of the buffer.
 * @param {Number} position - The index to place the value.
 * @param {Number} value - The Int8 value to insert.
 * @returns {DataView} A view of the buffer.
 * @throws {Error} If the position is outside the buffer range.
 */
export default function createInt8TypedArray(length, position, value) {
  // 1. Create the buffer of the specified length
  const buffer = new ArrayBuffer(length);

  // 2. Initialize the DataView to manipulate the buffer
  const view = new DataView(buffer);

  // 3. Attempt to set the Int8 value at the given position
  try {
    view.setInt8(position, value);
  } catch (e) {
    // If setInt8 fails (e.g., RangeError), throw the specific error required
    throw new Error('Position outside range');
  }

  return view;
}
