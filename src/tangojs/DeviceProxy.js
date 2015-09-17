import { DeviceAttribute } from './DeviceAttribute'

export class DeviceProxy {

  constructor(address) {
    this.address = address
  }

  getAddress() {
    return this.address
  }

  getAttribute(name) {
    return new DeviceAttribute(`${this.address}/${name}`)
  }
}
