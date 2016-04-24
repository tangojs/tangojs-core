
import { connector } from '../Connector'

export class Database {

  constructor() {
    // empty
  }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern
   */
  get_device_list(pattern) {
    return connector.get_device_list(pattern)
  }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern
   */
  get_device_domain(pattern) {
    return connector.get_device_domain(pattern)
  }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern
   */
  get_device_family(pattern) {
    return connector.get_device_family(pattern)
  }

  /**
   * @return {Promise<string[]>}
   * @param {string} pattern
   */
  get_device_member(pattern) {
    return connector.get_device_member(pattern)
  }

}
