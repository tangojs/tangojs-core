
/**
 * Proxy for executing commands on the device.
 */
export class DeviceCommand {

  /**
   * Creates new DeviceCommand.
   * @param {DeviceProxy}  deviceProxy  device proxy instance
   * @param {string}       commandName  command name
   */
  constructor(deviceProxy, commandName) {
    /** @private */
    this.deviceProxy = deviceProxy
    /** @private */
    this.commandName = commandName
  }

  /**
   * Reads command info.
   * @return {Promise<CommandInfo,Error>} result
   */
  readInfo() {
    return this.deviceProxy.readCommandInfo(this.commandName)
  }

  /**
   * Executes command. Pass undefined as argument for 0-arity commands.
   * Returns execution result (if sync is true) or undefined (if sync is false).
   * @param {Object}   arg   input argument
   * @param {boolean}  sync  synchronous / asynchronous call
   * @return {Promise<CommandOutputResponse,Error>|Promise<undefined,Error>}
   */
  execute(arg = undefined, sync = false) {
    return this.deviceProxy.executeCommand(this.commandName, arg, sync)
  }
}
