
export {
  Connector,
  setConnector
} from './tangojs/core/Connector'

import { AttributeInfo }   from './tangojs/core/api/AttributeInfo'
import { AttributeProxy }  from './tangojs/core/api/AttributeProxy'
import { CommandInfo }     from './tangojs/core/api/CommandInfo'
import { CommandProxy }    from './tangojs/core/api/CommandProxy'
import { Database }        from './tangojs/core/api/Database'
import { DbDatum }         from './tangojs/core/api/DbDatum'
import { DeviceAttribute } from './tangojs/core/api/DeviceAttribute'
import { DeviceData }      from './tangojs/core/api/DeviceData'
import { DeviceInfo }      from './tangojs/core/api/DeviceInfo'
import { DeviceProxy }     from './tangojs/core/api/DeviceProxy'


/** @private */
export const api = {
  AttributeInfo,
  AttributeProxy,
  CommandInfo,
  CommandProxy,
  Database,
  DbDatum,
  DeviceAttribute,
  DeviceData,
  DeviceInfo,
  DeviceProxy
}

import * as tangoIDL from './tangojs/core/tango/generated'

/** @private */
export const tango = tangoIDL
