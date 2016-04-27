
import { connector } from '../Connector'
import { DbDatum } from './DbDatum'

/**
 * @private
 * @param {T|T[]} valueOrArray
 * @param {function(t: T[]): Promise<V[],E>} transform
 * @return {Promise<V,E>|Promise<V[],E>}
 */
function handleAsArray (valueOrArray, transform) {
  const isArray = Array.isArray(valueOrArray)
  return transform(isArray ? valueOrArray : [valueOrArray])
    .then(result => isArray ? result : result[0])
}

/**
 * @private
 * @param {T|T[]} valueOrArray
 * @param {function(t: T[]): Promise<V,E>} transform
 * @return {Promise<undefined,E>}
 */
function handleAsArrayReturningUndefined (valueOrArray, transform) {
  return transform(Array.isArray(valueOrArray) ? valueOrArray : [valueOrArray])
    .then(() => undefined)
}

/**
 * @private
 * @param {Array<string|DbDatum>} nameArray
 * @return {string[]}
 */
function extractNames (nameArray) {
  return nameArray.map(entry => {
    if (entry instanceof DbDatum) {
      return entry.name
    } else if (typeof entry === 'string' || entry instanceof String) {
      return entry
    } else {
      return ''
    }
  })
  .filter(name => name !== '')
}

/** @private */
const _devname = Symbol.for('_devname')

export class DeviceProxy {

  /**
   * @param {string} devname
   */
  constructor (devname) {
    /** @private */
    this[_devname] = devname
  }

  /**
   * @return {Promise<string,Error>}
   */
  name () {
    return this.get_info().then(info => info.name)
  }

  /**
   * @return {Promise<string,Error>}
   */
  status () {
    return connector.get_device_status(this[_devname])
  }

  /**
   * @return {Promise<DevState,Error>}
   */
  state () {
    return connector.get_device_state(this[_devname])
  }

  /**
   * @param {string} cmdname
   * @return {Promise<CommandInfo,Error>}
   */
  command_query (cmdname) {
    return connector.device_command_query(this[_devname], cmdname)
  }

  /**
   * @return {Promise<CommandInfo[],Error>}
   */
  command_list_query () {
    return connector.device_command_list_query(this[_devname])
  }

  /**
   * @return {Promise<DeviceInfo,Error>}
   */
  get_info () {
    return connector.get_device_info(this[_devname])
  }

  /**
   * @param {string|string[]|DbDatum[]} pattern
   * @return {Promise<string[],Error>}
   */
  get_property_list (pattern) {
    return connector.get_device_property_list(this[_devname], pattern)
  }

  /**
   * @param {string|string[]|DbDatum[]} propnames
   * @return {Promise<DbDatum,Error>|Promise<DbDatum[],Error>}
   */
  get_property (propnames) {
    return handleAsArray(propnames, nameLikeArray => {
      return connector.get_device_property(this[_devname],
                                           extractNames(nameLikeArray))
    })
  }

  /**
   * @param {DbDatum|DbDatum[]} properties
   * @return {Promise<undefined,Error>}
   */
  put_property (properties) {
    return handleAsArrayReturningUndefined(properties, dbDatumArray => {
      return connector.put_device_property(this[_devname], dbDatumArray)
    })
  }

  /**
   * @param {string|string[]|DbDatum[]} propnames
   * @return {Promise<undefined,Error>}
   */
  delete_property (propnames) {
    return handleAsArrayReturningUndefined(propnames, nameLikeArray => {
      return connector.delete_device_property(this[_devname],
                                              extractNames(nameLikeArray))
    })
  }

  /**
   * @return {Promise<string[],Error>}
   */
  get_attribute_list () {
    return connector.get_device_attribute_list(this[_devname])
  }

  /**
   * @param {undefined|string|string[]} attnames
   * @return {Promise<AttributeInfo,Error>|Promise<AttributeInfo[],Error>}
   */
  get_attribute_info (attnames) {
    return (attnames ? Promise.resolve(attnames) : this.get_attribute_list())
      .then(resolvedAttnames => {
        return handleAsArray(resolvedAttnames, nameArray => {
          return connector.get_device_attribute_info(this[_devname], nameArray)
        })
      })
  }

  /**
   * @param {string|string[]} attnames
   * @return {Promise<DeviceAttribute,Error>|Promise<DeviceAttribute[],Error>}
   */
  read_attribute (attnames) {
    return handleAsArray(attnames, attNameArray => {
      return connector.read_device_attribute(this[_devname], attNameArray)
    })
  }

  /**
   * @param {DeviceAttribute|DeviceAttribute[]} attrs
   * @return {Promise<undefined,Error>}
   */
  write_attribute (attrs) {
    return handleAsArrayReturningUndefined(attrs, devAttrArray => {
      return connector.write_device_attribute(this[_devname], devAttrArray)
    })
  }

  /**
   * @param {DeviceAttribute|DeviceAttribute[]} attrs
   * @return {Promise<DeviceAttribute,Error>|Promise<DeviceAttribute[],Error>}
   */
  write_read_attribute (attrs) {
    return handleAsArray(attrs, devAttrArray => {
      return connector.write_read_device_attribute(this[_devname],
                                                   devAttrArray)
    })
  }

  /**
   * @param {string} cmdname
   * @param {undefined|DeviceData} argin
   * @return {Promise<DeviceData,Error>}
   */
  command_inout (cmdname, argin) {
    return connector.device_command_inout(this[_devname], cmdname, argin)
  }
}
