import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   * @param {Number} sqft
   * @param {Number} floors
   */
  constructor(sqft, floors) {
    // Call the parent constructor to set _sqft and pass the "abstract" check
    super(sqft);
    this._floors = floors;
  }

  // Getter for sqft (Inherited from Building, but can be accessed via super or this)
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  /**
   * Overrides the parent requirement
   * @returns {String}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
