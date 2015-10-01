
import { TimestampedResponse } from './TimestampedResponse.js'

/** Represents result of reading an attribute. */
export class AttributeReadResponse extends TimestampedResponse {

  /**
   * @param {number} timestamp
   * @param {Object} argout
   * @param {AttributeQuality} quality
   */
  constructor(timestamp, argout, quality) {
    super(timestamp)
    /** @private */
    this._argout = argout
    /** @private */
    this._quality = quality
    Object.freeze(this)
    Object.freeze(this._argout)
    Object.freeze(this._quality)
  }

  /** @type {Object} */
  get argout() {
    return this._argout
  }

  /** @type {AttributeQuality} */
  get quality() {
    return this._quality
  }
}
