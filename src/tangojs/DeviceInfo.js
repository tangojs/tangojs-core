
/**
 * Contains information about a device.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/TangoApi/DeviceInfo.html
 */
export class DeviceInfo {

  /**
   * Creates new DeviceInfo.
   * @param {Object} info serialized DeviceInfo from TangORB.
   */
  constructor(info) {
    /** @access private */
    this.devinfo = info
  }

  /** @type {string} */
  get last_exported() {
    return this.devinfo['last_exported']
  }

  /** @type {string} */
  get last_unexported() {
    return this.devinfo['last_unexported']
  }

  /** @type {string} */
  get device_name() {
    return this.devinfo['name']
  }

  /** @type {string} */
  get ior() {
    return this.devinfo['ior']
  }

  /** @type {string} */
  get version() {
    return this.devinfo['version']
  }

  /** @type {boolean} */
  get exported() {
    return this.devinfo['exported']
  }

  /** @type {number} */
  get pid() {
    return this.devinfo['pid']
  }

  /** @type {string} */
  get server() {
    return this.devinfo['server']
  }

  /** @type {string} */
  get hostname() {
    return this.devinfo['hostname']
  }

  /** @type {string} */
  get classname() {
    return this.devinfo['classname']
  }

  /** @type {boolean} */
  get is_taco() {
    return this.devinfo['is_taco']
  }

  /** @type {string} */
  get taco_info() {
    return this.devinfo['taco_info']
  }
}
