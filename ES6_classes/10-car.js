export default class Car {
  /**
   * @param {String} brand
   * @param {String} motor
   * @param {String} color
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Returns a new instance of the class or subclass.
   * @returns {Object}
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    return new Species();
  }

  // We define Symbol.species to return the current class
  static get [Symbol.species]() {
    return this;
  }
}
