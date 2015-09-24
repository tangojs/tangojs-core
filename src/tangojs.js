
export { AttributeInfo }    from './tangojs/AttributeInfo'
export { CommandInfo }      from './tangojs/CommandInfo'
export { Connector }        from './tangojs/Connector'
export { Database }         from './tangojs/Database'
export { DeviceAttribute }  from './tangojs/DeviceAttribute'
export { DeviceCommand }    from './tangojs/DeviceCommand'
export { DeviceInfo }       from './tangojs/DeviceInfo'
export { DeviceProxy }      from './tangojs/DeviceProxy'
export { DeviceStatus }     from './tangojs/DeviceStatus'
export {
  InvalidDeviceNameException
} from './tangojs/exceptions'

/**
 * Backend-specific connector implementation.
 * @access private
 */
export let connector = null

/**
 * Sets connector interface implementation.
 * @param {Connector} conn connector implementation
 */
export function setConnector(conn) {
  connector = conn
}
