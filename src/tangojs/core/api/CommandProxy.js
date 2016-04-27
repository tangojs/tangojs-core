
import { DeviceProxy } from './DeviceProxy'

/** @private */
const _proxy = Symbol.for('_proxy')

/** @private */
const _cmdname = Symbol.for('_cmdname')

export class CommandProxy {

  /**
   * @param {string} devname device name
   * @param {string} cmdname command name
   */
  constructor (devname, cmdname) {

    /** @private */
    this[_cmdname] = cmdname

    /** @private */
    this[_proxy] = new DeviceProxy(devname)
  }

  /**
   * @return {Promise<CommandInfo,Error>}
   */
  get_info () {
    return this[_proxy].command_query(this[_cmdname])
  }

  /**
   * @param {undefined|DeviceData} argin
   * @return {Promise<DeviceData,Error>}
   */
  inout (argin) {
    return this[_proxy].command_inout(this[_cmdname], argin)
  }
}
