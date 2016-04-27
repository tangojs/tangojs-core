
export class DeviceInfo {

  /**
   * @param {Object} data data
   */
  constructor (data) {
    /** @private */
    this._data = data
  }

  /** @type {string} */
  get classname () {
    return this._data.classname
  }

  /** @type {boolean} */
  get exported () {
    return this._data.exported
  }

  /** @type {string} */
  get hostname () {
    return this._data.hostname
  }

  /** @type {string} */
  get ior () {
    return this._data.ior
  }

  /** @type {boolean} */
  get is_taco () {
    return this._data.is_taco
  }

  /** @type {string} */
  get last_exported () {
    return this._data.last_exported
  }

  /** @type {string} */
  get last_unexported () {
    return this._data.last_unexported
  }

  /** @type {string} */
  get name () {
    return this._data.name
  }

  /** @type {number} */
  get pid () {
    return this._data.pid
  }

  /** @type {string} */
  get server () {
    return this._data.server
  }

  /** @type {string} */
  get taco_data () {
    return this._data.taco_data
  }

  /** @type {string} */
  get version () {
    return this._data.version
  }

}
