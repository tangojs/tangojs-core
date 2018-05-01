
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
export function setConnector (conn) {
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
   * Return the default database address
   *
   * @return {Promise<string,Error>}
   */
  get_database () { }

  /**
   * @param {string} devname
   * @return {Promise<string,Error>}
   */
  get_device_status (devname) { }

  /**
   * @param {string} devname
   * @return {Promise<DevState,Error>}
   */
  get_device_state (devname) { }

  /**
   * @param {string} devname
   * @return {Promise<DeviceInfo,Error>}
   */
  get_device_info (devname) { }

  /**
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_list (pattern) { }

  /**
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_domain (pattern) { }

  /**
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_family (pattern) { }

  /**
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_member (pattern) { }

  /**
   * @param {string} devname
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_property_list (devname, pattern) { }

  /**
   * @param {string} devname
   * @param {string[]} propnames
   * @return {Promise<DbDatum[],Error>}
   */
  get_device_property (devname, propnames) { }

  /**
   * @param {string} devname
   * @param {DbDatum[]} properties
   * @return {Promise<undefined,Error>}
   */
  put_device_property (devname, properties) { }

  /**
   * @param {string} devname
   * @param {string[]} propnames
   * @return {Promise<undefined,Error>}
   */
  delete_device_property (devname, propnames) { }

  /**
   * @param {string} devname
   * @return {Promise<string[],Error>}
   */
  get_device_attribute_list (devname) { }

  /**
   * @param {string} devname
   * @param {string[]} attnames
   * @return {Promise<AttributeInfo[],Error>}
   */
  get_device_attribute_info (devname, attnames) { }

  /**
   * @param {string} devname
   * @param {string[]} attname
   * @return {Promise<DeviceAttribute[],Error>}
   */
  read_device_attribute (devname, attname) { }

  /**

   * @param {string} devname
   * @param {DeviceAttribute[]} attrs
   * @return {Promise<undefined,Error>}
   */
  write_device_attribute (devname, attrs) { }

  /**
   * @param {string} devname
   * @param {DeviceAttribute[]} attrs
   * @return {Promise<DeviceAttribute[],Error>}
   */
  write_read_device_attribute (devname, attrs) { }

  /**
   * @param {string} devname
   * @param {string} cmdname
   * @param {undefined|DeviceData} argin
   * @return {Promise<DeviceData,Error>}
   */
  device_command_inout (devname, cmdname, argin) { }

  /**
   * @param {string} devname
   * @param {string} cmdname
   * @return {Promise<CommandInfo,Error>}
   */
  device_command_query (devname, cmdname) { }

  /**
   * @param {string} devname
   * @return {Promise<CommandInfo[],Error>}
   */
  device_command_list_query (devname) { }
}
