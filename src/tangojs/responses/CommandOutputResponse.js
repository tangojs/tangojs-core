
import { TimestampedResponse } from './TimestampedResponse.js'

/** Represents result of executing a command. */
export class CommandOutputResponse extends TimestampedResponse {

  /**
   * @param {number} timestamp
   * @param {Object} argout
   */
  constructor(timestamp, argout) {
    super(timestamp)
    /** @private */
    this._argout = argout
    Object.freeze(this)
    Object.freeze(this._argout)
  }

  /** @type {Object} */
  get argout() {
    return this._argout
  }

}
