
/**
 * Immutable structure that contains information about a device.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/TangoApi/DeviceInfo.html
 */
export class DeviceInfo {

  /**
   * Creates new DeviceInfo.
   * @param {Object} info serialized DeviceInfo from TangORB.
   */
  constructor(info) {
    /** @access private */
    this._info = info
    Object.freeze(this)
    Object.freeze(this._info)
  }

  /** @type {string} */
  get classname() {
    return this._info['classname']
  }

  /** @type {boolean} */
  get exported() {
    return this._info['exported']
  }

  /** @type {string} */
  get hostname() {
    return this._info['hostname']
  }

  /** @type {string} */
  get ior() {
    return this._info['ior']
  }

  /** @type {boolean} */
  get is_taco() {
    return this._info['is_taco']
  }

  /** @type {string} */
  get last_exported() {
    return this._info['last_exported']
  }

  /** @type {string} */
  get last_unexported() {
    return this._info['last_unexported']
  }

  /** @type {string} */
  get name() {
    return this._info['name']
  }

  /** @type {number} */
  get pid() {
    return this._info['pid']
  }

  /** @type {string} */
  get server() {
    return this._info['server']
  }

  /** @type {string} */
  get taco_info() {
    return this._info['taco_info']
  }

  /** @type {string} */
  get version() {
    return this._info['version']
  }

}
