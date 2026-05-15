import ClassRoom from './0-classroom.js';

/**
 * Creates an array of ClassRoom objects with specific sizes.
 * @returns {Array} An array of three ClassRoom objects.
 */
export default function initializeRooms() {
  const sizes = [19, 20, 34];
  return sizes.map((size) => new ClassRoom(size));
}
