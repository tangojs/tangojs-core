
export { AttributeInfo }    from './tangojs/AttributeInfo'
export { CommandInfo }      from './tangojs/CommandInfo'
export { Connector }        from './tangojs/Connector'
export { Database }         from './tangojs/Database'
export { DeviceAttribute }  from './tangojs/DeviceAttribute'
export { DeviceCommand }    from './tangojs/DeviceCommand'
export { DeviceInfo }       from './tangojs/DeviceInfo'
export { DeviceProxy }      from './tangojs/DeviceProxy'

export { AttributeReadResponse } from './tangojs/responses/AttributeReadResponse'
export { CommandOutputResponse } from './tangojs/responses/CommandOutputResponse'
export { DeviceStatusResponse }  from './tangojs/responses/DeviceStatusResponse'

export { AttributeDataFormat } from './tangojs/constants/AttributeDataFormat'
export { AttributeDataType }   from './tangojs/constants/AttributeDataType'
export { AttributeQuality }    from './tangojs/constants/AttributeQuality'
export { AttributeWriteType }  from './tangojs/constants/AttributeWriteType'
export { DeviceState }         from './tangojs/constants/DeviceState'
export { DisplayLevel }        from './tangojs/constants/DisplayLevel'
export { ErrorSeverity }       from './tangojs/constants/ErrorSeverity'

export { InvalidDeviceNameException } from './tangojs/exceptions'

/**
 * Backend-specific connector implementation.
 * @private
 */
export let connector = null

/**
 * Sets connector interface implementation.
 * @param {Connector} conn connector implementation
 */
export function setConnector(conn) {
  connector = conn
}
