
import { DeviceProxy } from './DeviceProxy'

export class CommandProxy {

  /**
   * @param {string} devname device name
   * @param {string} cmdname command name
   */
  constructor(devname, cmdname) {

    /** @private */
    this._cmdname = cmdname

    /** @private */
    this._proxy = new DeviceProxy(devname)
  }

  /**
   * @return {Promise<CommandInfo>}
   */
  get_info() {
    return this._proxy.command_query(this._cmdname)
  }

  /**
   * @return {Promise<DeviceData>}
   * @param {undefined|DeviceData} argin
   */
  inout(argin) {
    return this._proxy.command_inout(this._cmdname, argin)
  }
}
