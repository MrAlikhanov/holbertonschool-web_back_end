export default class Airport {
  /**
   * @param {String} name
   * @param {String} code
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for the toString tag
  get [Symbol.toStringTag]() {
    return this._code;
  }

  /**
   * Returns the string representation of the object
   * @returns {String}
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
