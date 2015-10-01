import { connector } from '../tangojs'
import { DeviceAttribute } from './DeviceAttribute'
import { DeviceCommand } from './DeviceCommand'
import { InvalidDeviceNameException } from './exceptions'

const deviceNamePattern = /^\w+\/\w+\/\w+$/

/**
 * Device proxy that allows one to access attributes and properties of a device.
 */
export class DeviceProxy {

  /**
   * Creates new DeviceProxy.
   * Takes 1 or 3 arguments.
   * @param {...string} args device name
   * @throws {InvalidDeviceNameException} thrown when device name is invalid
   * @example
   * let p1 = new tangojs.DeviceProxy('my/dev/1')
   * let p2 = new tangojs.DeviceProxy('my', 'dev', '1')
   */
  constructor(...args) {

    let [domain, family, member] = args

    /** @private */
    this.deviceName = (domain && family && member)
      ? `${domain}/${family}/${member}` : domain

    if (! this.deviceName || this.deviceName.search(deviceNamePattern) < 0)
      throw new InvalidDeviceNameException(this.deviceName)
  }

  /**
   * Returns device name.
   * @return {string} device name
   */
  getName() {
    return this.deviceName
  }

  /**
   * Reads device status.
   * @return {Promise<DeviceStatusResponse,Error>} device status
   */
  readStatus() {
    return connector.readDeviceStatus(this.deviceName)
  }

  /**
   * Reads device info.
   * @return {Promise<DeviceInfo,Error>} device info
   */
  readInfo() {
    return connector.readDeviceInfo(this.deviceName)
  }

  /**
   * Reads list of attribute names.
   * @return {Promise<string[],Error>} attribute names
   */
  readAttributesList() {
    return connector.readAttributesList(this.deviceName)
  }

  /**
   * Factory method for {@link DeviceAttribute} instances.
   * @param {string} attributeName attribute name
   * @return {DeviceAttribute} attribute proxy
   */
  createDeviceAttribute(attributeName) {
    return new DeviceAttribute(this, attributeName)
  }

  /**
   * Reads attribute value.
   * @param {string} attributeName attribute name
   * @return {Promise<AttributeReadResponse,Error>} result
   */
  readAttributeValue(attributeName) {
    return connector.readAttributeValue(this.deviceName, attributeName)
  }

  /**
   * Writes attribute value.
   * Returns promise of stored value (if sync is true)
   * or undefined (if sync is false).
   * @param {string}   attributeName  attribute name
   * @param {Object}   value          value to write
   * @param {boolean}  [sync=false]   synchronous / asynchronous call
   * return {Promise<AttributeReadResponse,Error>|Promise<undefined|Error}
   */
  writeAttributeValue(attributeName, value, sync = false) {
    let nv = [[attributeName, value]]
    let bulk = this.writeAttributeValuesBulk(nv, sync, false)
    return bulk.then( r => (r || [undefined])[0] )
  }

  /**
   * Writes values into multiple attributes.
   * Returns promise of stored values (if sync is true)
   * or undefined (if sync is false).
   * @param {Object[][]}  nameValueTuples  list of 2-element lists [name, value]
   * @param {boolean}     [sync=false]     synchronous / asynchronous call
   * @param {boolean}     [reset=false]    reset not specified attributes
   * @return {Promise<AttributeReadResponse[],Error>|Promise<undefined|Error>}
   */
  writeAttributeValuesBulk(nameValueTuples, sync = false, reset = false) {
    return connector.writeAttributeValuesBulk(this.deviceName,
      nameValueTuples, sync, reset)
  }

  /**
   * Reads attribute info.
   * @param {string} attributeName attribute name
   * @return {Promise<AttributeInfo,Error>} result
   */
  readAttributeInfo(attributeName) {
    return connector.readAttributeInfo(this.deviceName, attributeName)
  }

  /**
   * Factory method for {@link DeviceCommand} instances.
   * @param {string} commandName command name
   * @return {DeviceCommand} command proxy
   */
  createDeviceCommand(commandName) {
    return new DeviceCommand(this, commandName)
  }

  /**
   * Reads list of command names.
   * @return {Promise<string[],Error>} command names
   */
  readCommandsList() {
    return connector.readCommandsList(this.deviceName)
  }

  /**
   * Reads command info.
   * @param {string} commandName command name
   * @return {Promise<CommandInfo,Error>} result
   */
  readCommandInfo(commandName) {
    return connector.readCommandInfo(this.deviceName, commandName)
  }

  /**
   * Executes command. Pass undefined as argument for 0-arity commands.
   * Returns execution result (if sync is true) or undefined (if sync is false).
   * @param {string}   commandName      command name
   * @param {Object}   [arg=undefined]  input argument
   * @param {boolean}  [sync=false]     synchronous / asynchronous call
   * @return {Promise<CommandOutputResponse,Error>|Promise<undefined|Error>
   */
  executeCommand(commandName, arg = undefined, sync = false) {
    return connector.executeCommand(this.deviceName, commandName, arg, sync)
  }

  // TODO add support for events

  // TODO add support for properties
}
