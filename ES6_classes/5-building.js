export default class Building {
  /**
   * @param {Number} sqft
   */
  constructor(sqft) {
    this._sqft = sqft;

    // Check if the class is being instantiated directly or via a subclass
    // and ensure the subclass has overridden the required method.
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
