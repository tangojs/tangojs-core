
import { connector } from '../Connector'

export class DeviceProxy {

  /**
   * @param {string} devname
   */
  constructor(devname) {
    /** @private */
    this._devname = devname
  }

  /**
   * @return {Promise<string>}
   */
  name() {
    return this.get_info().then(info => info.name)
  }

  /**
   * @return {Promise<string>}
   */
  status() {
    return connector.get_device_status(this._devname)
  }

  /**
   * @return {Promise<DevState>}
   */
  state() {
    return connector.get_device_state(this._devname)
  }

  /**
   * @return {Promise<CommandInfo>}
   * @param {string} cmdname command name
   */
  command_query(cmdname) {
    return connector.device_command_query(this._devname, cmdname)
  }

  /**
   * @return {Promise<CommandInfo[]>}
   */
  command_list_query() {
    return connector.device_command_list_query(this._devname)
  }

  /**
   * @return {Promise<DeviceInfo>}
   */
  get_info() {
    return connector.get_device_info(this._devname)
  }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern proprty name pattern
   */
  get_property_list(pattern) {
    return connector.get_device_property_list(this._devname, pattern)
  }

  /**
   * @return {Promise<DbDatum>|Promise<DbDatum[]>}
   * @param {string|string[]|DbDatum[]} propnames property names
   */
  get_property(propnames) {
    return connector.get_device_property(this._devname, propnames)
  }

  /**
   * @return {Promise<undefined>}
   * @param {DbDatum[]} properties
   */
  put_property(properties) {
    return connector.put_device_property(this._devname, properties)
  }

  /**
   * @return {Promise<undefined>}
   * @param {string|string[]|DbDatum[]} propnames property names
   */
  delete_property(propnames) {
    return connector.delete_device_property(this._devname, propnames)
  }

  /**
   * @return {Promise<string[]>}
   */
  get_attribute_list() {
    return connector.get_device_attribute_list(this._devname)
  }

  /**
   * @return {Promise<AttributeInfo>|Promise<AttributeInfo[]>}
   * @param {undefined|string|string[]} attnames
   */
  get_attribute_info(attnames) {
    return connector.get_device_attribute_info(this._devname, attnames)
  }

  /**
   * @return {Promise<DeviceAttribute>|Promise<DeviceAttribute[]>}
   * @param {string|string[]} attname
   */
  read_attribute(attname) {
    return connector.read_device_attribute(this._devname, attname)
  }

  /**
   * @return {Promise<undefined>}
   * @param {DeviceAttribute|DeviceAttribute[]} attrs
   */
  write_attribute(attrs) {
    return connector.write_device_attribute(this._devname, attrs)
  }

  /**
   * @return {Promise<DeviceAttribute>|Promise<DeviceAttribute[]>}
   * @param {DeviceAttribute|DeviceAttribute[]} attrs
   */
  write_read_attribute(attrs) {
    return connector.write_read_device_attribute(this._devname, attrs)
  }

  /**
   * @return {Promise<DeviceData>}
   * @param {string} cmdname
   * @param {undefined|DeviceData} argin
   */
  command_inout(cmdname, argin) {
    return connector.device_command_inout(this._devname, cmdname, argin)
  }
}
