export default class HolbertonClass {
  /**
   * @param {Number} size
   * @param {String} location
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Custom primitive conversion logic.
   * @param {String} hint - The type of conversion JavaScript is attempting.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
