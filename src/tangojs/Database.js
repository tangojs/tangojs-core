import { connector } from '../tangojs'

/**
 * Gives access to the database.
 */
export class Database {

  /**
   * Reads list of all domains.
   * @return {Promise<string[],Error>} result
   */
  readDomains() {
    return connector.dbReadDomains()
  }

  /**
   * Reads list of all families in given domain.
   * @param {string} domain domain name
   * @return {Promise<string[],Error>} result
   */
  readFamilies(domain) {
    return connector.dbReadFamilies(domain)
  }

  /**
   * Reads list of all members in given domain and family.
   * @param {string} domain domain name
   * @param {string} family family name
   * @return {Promise<string[],Error>} result
   */
  readMembers(domain, family) {
    return connector.dbReadMembers(domain, family)
  }

  // TODO add support for listing and filtering devices
}
