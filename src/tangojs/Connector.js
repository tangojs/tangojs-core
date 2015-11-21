
/* eslint-disable no-unused-vars */

/**
 * Backend-specific connector implementation.
 * @private
 */
export let connector = null

/**
 * Sets connector interface implementation.
 * @param {Connector} conn connector implementation
 */
export function setConnector(conn) {
  connector = conn
}

/**
 * Tangojs connector interface. This class contains backend-specific
 * logic. Each connector plugin have to provide implementation
 * of this interface.
 * @interface
 */
export class Connector {

  /**
   * @return {Promise<string>}
   * @param {string} devname
   */
  get_device_status(devname) { }

  /**
   * @return {Promise<DevState>}
   * @param {string} devname
   */
  get_device_state(devname) { }

  /**
   * @return {Promise<DeviceInfo>}
   * @param {string} devname
   */
  get_device_info(devname) { }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern
   */
  get_device_list(pattern) { }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern
   */
  get_device_domain(pattern) { }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern
   */
  get_device_family(pattern) { }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern
   */
  get_device_member(pattern) { }

  /**
   * @return {Promise<string[]>}
   * @param {string} devname
   * @param {string} pattern
   */
  get_device_property_list(devname, pattern) { }

  /**
   * @return {Promise<DbDatum>|Promise<DbDatum[]>}
   * @param {string} devname
   * @param {string|string[]|DbDatum[]} propnames
   */
  get_device_property(devname, propnames) { }

  /**
   * @return {Promise<undefined>}
   * @param {string} devname
   * @param {DbDatum[]} properties
   */
  put_device_property(devname, properties) { }

  /**
   * @return {Promise<undefined>}
   * @param {string} devname
   * @param {string|string[]|DbDatum[]} propnames property names
   */
  delete_device_property(devname, propnames) { }

  /**
   * @return {Promise<string[]>}
   * @param {string} devname
   */
  get_device_attribute_list(devname) { }

  /**
   * @return {Promise<AttributeInfo>|Promise<AttributeInfo[]>}
   * @param {string} devname
   * @param {undefined|string|string[]} attnames
   */
  get_device_attribute_info(devname, attnames) { }

  /**
   * @return {Promise<DeviceAttribute>|Promise<DeviceAttribute[]>}
   * @param {string} devname
   * @param {string|string[]} attname
   */
  read_device_attribute(devname, attname) { }

  /**
   * @return {Promise<undefined>}
   * @param {string} devname
   * @param {DeviceAttribute|DeviceAttribute[]} attrs
   */
  write_device_attribute(devname, attrs) { }

  /**
   * @return {Promise<DeviceAttribute>|Promise<DeviceAttribute[]>}
   * @param {string} devname
   * @param {DeviceAttribute|DeviceAttribute[]} attrs
   */
  write_read_device_attribute(devname, attrs) { }

  /**
   * @return {Promise<DeviceData>}
   * @param {string} devname
   * @param {string} cmdname
   * @param {undefined|DeviceData} argin
   */
  device_command_inout(devname, cmdname, argin) { }

  /**
   * @return {Promise<CommandInfo>}
   * @param {string} devname
   * @param {string} cmdname
   */
  device_command_query(devname, cmdname) { }

  /**
   * @return {Promise<CommandInfo[]>}
   * @param {string} devname
   */
  device_command_list_query(devname) { }
}
