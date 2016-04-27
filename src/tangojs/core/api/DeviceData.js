
export class DeviceData {

  /**
   * @param {Object} value
   */
  constructor (value) {
    /** @private */
    this._value = value
  }

  /** @type {Object} */
  get value () {
    return this._value
  }

  /** @type {Object} */
  set value (value) {
    this._value = value
  }
}
