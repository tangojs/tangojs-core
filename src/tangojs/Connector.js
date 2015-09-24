
/* eslint-disable no-unused-vars */

// FIXME isparta does not support istanbul comments
/* isparta ignore next */

/**
 * Tangojs connector interface. This class contains backend-specific
 * logic. Each connector plugin have to provide implementation
 * of this interface.
 * @interface
 */
export class Connector {

  /**
   * Reads list of all domains.
   * @return {Promise<string[],Error>} result
   */
  dbReadDomains() {}

  /**
   * Reads list of all families in given domain.
   * @param {string} domain domain name
   * @return {Promise<string[],Error>} result
   */
  dbReadFamilies(domain) {}

  /**
   * Reads list of all members in given domain and family.
   * @param {string} domain domain name
   * @param {string} family family name
   * @return {Promise<string[],Error>} result
   */
  dbReadMembers(domain, family) {}

  /**
   * Reads device status.
   * @param {string} deviceName device name
   * @return {Promise<DeviceStatus,Error>} device status
   */
  readDeviceStatus(deviceName) {}

  /**
   * Reads device info.
   * @param {string} deviceName device name
   * @return {Promise<DeviceInfo,Error>} device info
   */
  readDeviceInfo(deviceName) {}

  /**
   * Reads list of attribute names.
   * @param {string} deviceName device name
   * @return {Promise<string[],Error>} attribute names
   */
  readAttributesList(deviceName) {}

  /**
   * Reads attribute value.
   * @param {string}  deviceName     device name
   * @param {string}  attributeName  attribute name
   * @return {Promise<AttributeValue,Error>} result
   */
  readAttributeValue(deviceName, attributeName) {}

  /**
   * Writes values into multiple attributes.
   * Returns promise of stored values (if sync is true)
   * or null (if sync is false).
   * @param {string}      deviceName       device name
   * @param {Object[][]}  nameValueTuples  list of 2-element lists [name, value]
   * @param {boolean}     [sync=false]     synchronous / asynchronous call
   * @param {boolean}     [reset=false]    reset not specified attributes
   * @return {Promise<AttributeValue[],Error>|null} stored value or null
   */
  writeAttributeValuesBulk(deviceName, nameValueTuples, sync, reset) {}

  /**
   * Reads attribute info.
   * @param {string}  deviceName     device name
   * @param {string}  attributeName  attribute name
   * @return {Promise<AttributeInfo,Error>} result
   */
  readAttributeInfo(deviceName, attributeName) {}

  /**
   * Reads list of command names.
   * @param {string} deviceName device name
   * @return {Promise<string[],Error>} command names
   */
  readCommandsList(deviceName) {}

  /**
   * Reads command info.
   * @param {string}  deviceName   device name
   * @param {string}  commandName  command name
   * @return {Promise<CommandInfo,Error>} result
   */
  readCommandInfo(deviceName, commandName) {}

  /**
   * Executes command. Pass undefined as argument for 0-arity commands.
   * Returns execution result (if sync is true) or null (if sync is false).
   * @param {string}   deviceName   device name
   * @param {string}   commandName  command name
   * @param {Object}   arg          input argument
   * @param {boolean}  sync         synchronous / asynchronous call
   * @return {Promise<CommandResult[],Error>|null} result of execution or null
   */
  executeCommand(deviceName, commandName, arg, sync) {}
}
