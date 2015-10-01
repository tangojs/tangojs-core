
/** Base class for responses. */
export class TimestampedResponse {

  /**
   * @param {number} timestamp time when this value was created
   */
  constructor(timestamp) {
    /** @private */
    this._timestamp = timestamp
  }

  /** @type {number} */
  get timestamp() {
    return this._timestamp
  }
}
