
import { connector } from '../Connector'
import { DeviceProxy } from './DeviceProxy'

export class Database extends DeviceProxy {

  constructor (devname) {
    super(devname)
  }

  /**
   * Create an instance of the default Database proxy
   *
   * @param {string} pattern
   * @return {Promise<Database,Error>}
   */
  static default () {
    return connector.get_database().then(name => {
      return new Database(name)
    })
  }

  /**
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_list (pattern) {
    return connector.get_device_list(pattern)
  }

  /**
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_domain (pattern) {
    return connector.get_device_domain(pattern)
  }

  /**
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_family (pattern) {
    return connector.get_device_family(pattern)
  }

  /**
   * @param {string} pattern
   * @return {Promise<string[],Error>}
   */
  get_device_member (pattern) {
    return connector.get_device_member(pattern)
  }

}
