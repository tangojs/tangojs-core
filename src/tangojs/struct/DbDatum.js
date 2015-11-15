
export class DbDatum {

  /**
   * @param {string} name
   * @param {Object} value
   */
  constructor(name, value) {

    /** @private */
    this._name = name

    /** @private */
    this._value = value
  }

  /** @type {string} */
  get name() {
    return this._name
  }

  /** @type {Object} */
  get value() {
    return this._value
  }

  /** @type {Object} */
  set value(value) {
    this._value = value
  }
}
