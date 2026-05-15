export default class Currency {
  /**
   * @param {String} code
   * @param {String} name
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  /**
   * Returns the full currency format: name (code)
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
