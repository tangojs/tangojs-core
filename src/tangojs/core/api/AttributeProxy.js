
import { DeviceProxy } from './DeviceProxy'

export class AttributeProxy {

  /**
   * @param {string} devname device name
   * @param {string} attname attribute name
   */
  constructor(devname, attname) {

    /** @private */
    this._attname = attname

    /** @private */
    this._proxy = new DeviceProxy(devname)
  }

  /**
   * @return {Promise<AttributeInfo>}
   */
  get_info() {
    return this._proxy.get_attribute_info(this._attname)
  }

  /**
   * @return {Promise<DeviceAttribute>}
   */
  read() {
    return this._proxy.read_attribute(this._attname)
  }

  /**
   * @param {DeviceAttribute} attr
   */
  write(attr) {
    let a = Object.assign({}, attr._data, {name: this._attname})
    return this._proxy.write_attribute(a)
  }
}
