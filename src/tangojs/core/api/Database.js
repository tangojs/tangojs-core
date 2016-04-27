
import { connector } from '../Connector'

export class Database {

  constructor () {
    // empty
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
