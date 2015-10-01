
/**
 * Immutable structure that contains information about an attribute.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/TangoApi/AttributeInfo.html
 */
export class AttributeInfo {

  /**
   * Creates new AttributeInfo.
   * @param {Object} info serialized AttributeInfo from TangORB.
   */
  constructor(info) {
    /** @access private */
    this._info = info
    Object.freeze(this)
    Object.freeze(this._info)
  }

  /** @type {AttributeDataFormat} */
  get data_format() {
    return this._info['data_format']
  }

  /** @type {number} */
  get data_type() {
    return this._info['data_type']
  }

  /** @type {string} */
  get description() {
    return this._info['description']
  }

  /** @type {string} */
  get display_unit() {
    return this._info['display_unit']
  }

  /** @type {string[]} */
  get extensions() {
    return this._info['extensions']
  }

  /** @type {string} */
  get format() {
    return this._info['format']
  }

  /** @type {string} */
  get label() {
    return this._info['label']
  }

  /** @type {DisplayLevel} */
  get level() {
    return this._info['level']
  }

  /** @type {string} */
  get max_alarm() {
    return this._info['max_alarm']
  }

  /** @type {number} */
  get max_dim_x() {
    return this._info['max_dim_x']
  }

  /** @type {number} */
  get max_dim_y() {
    return this._info['max_dim_y']
  }

  /** @type {string} */
  get max_value() {
    return this._info['max_value']
  }

  /** @type {string} */
  get min_alarm() {
    return this._info['min_alarm']
  }

  /** @type {string} */
  get min_value() {
    return this._info['min_value']
  }

  /** @type {string} */
  get name() {
    return this._info['name']
  }

  /** @type {string} */
  get standard_unit() {
    return this._info['standard_unit']
  }

  /** @type {string} */
  get unit() {
    return this._info['unit']
  }

  /** @type {AttributeWriteType} */
  get writable() {
    return this._info['writable']
  }

  /** @type {string} */
  get writable_attr_name() {
    return this.inf['writable_attr_name']
  }

}
