
import { TimestampedResponse } from './TimestampedResponse.js'

/** Status and state of a device. */
export class DeviceStatusResponse extends TimestampedResponse {

  /**
   * @param {number} timestamp
   * @param {DeviceState} state
   * @param {string} status
   */
  constructor(timestamp, state, status) {
    super(timestamp)
    /** @private */
    this._state = state
    /** @private */
    this._status = status
    Object.freeze(this)
    Object.freeze(this._state)
    Object.freeze(this._status)
  }

  /** @type {DeviceState} */
  get state() {
    return this._state
  }

  /** @type {string} **/
  get status() {
    return this._status
  }

}
