
import { DeviceProxy } from './DeviceProxy'
import { DeviceAttribute } from './DeviceAttribute'

/** @private */
const _proxy = Symbol.for('_proxy')

/** @private */
const _attname = Symbol.for('_attname')

export class AttributeProxy {

  /**
   * @param {string} devname
   * @param {string} attname
   */
  constructor (devname, attname) {

    /** @private */
    this[_attname] = attname

    /** @private */
    this[_proxy] = new DeviceProxy(devname)
  }

  /**
   * @return {Promise<AttributeInfo,Error>}
   */
  get_info () {
    return this[_proxy].get_attribute_info(this[_attname])
  }

  /**
   * @return {Promise<DeviceAttribute,Error>}
   */
  read () {
    return this[_proxy].read_attribute(this[_attname])
  }

  /**
   * @param {DeviceAttribute} attr
   * @return {Promise<undefined,Error>}
   */
  write (attr) {
    // FIXME do sth with accessing private _data
    const data = Object.assign({}, attr._data, { name: this[_attname] })
    const attribute = new DeviceAttribute(data)
    return this[_proxy].write_attribute(attribute)
  }
}
