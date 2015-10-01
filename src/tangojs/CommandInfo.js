
/**
 * Immutable structure that contains information about a command.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/TangoApi/CommandInfo.html
 */
export class CommandInfo {

  /**
   * Creates new CommandInfo.
   * @param {Object} info serialized CommandInfo from TangORB.
   */
  constructor(info) {
    /** @access private */
    this._info = info
    Object.freeze(this)
    Object.freeze(this._info)
  }

  /** @type {string} */
  get cmd_name() {
    return this._info['cmd_name']
  }

  /** @type {number} */
  get cmd_tag() {
    return this._info['cmd_tag']
  }

  /** @type {number} */
  get in_type() {
    return this._info['in_type']
  }

  /** @type {string} */
  get in_type_desc() {
    return this._info['in_type_desc']
  }

  /** @type {DisplayLevel} */
  get level() {
    return this._info['level']
  }

  /** @type {number} */
  get out_type() {
    return this._info['out_type']
  }

  /** @type {string} */
  get out_type_desc() {
    return this._info['out_type_desc']
  }

}
