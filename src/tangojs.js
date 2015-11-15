
export {
  Connector,
  connector,
  setConnector
} from './tangojs/Connector'

import { AttributeProxy } from './tangojs/proxy/AttributeProxy'
import { CommandProxy }   from './tangojs/proxy/CommandProxy'
import { Database }       from './tangojs/proxy/Database'
import { DeviceProxy }    from './tangojs/proxy/DeviceProxy'

/** @private */
export const proxy = {
  AttributeProxy, CommandProxy, Database, DeviceProxy
}

import { AttributeInfo }   from './tangojs/struct/AttributeInfo'
import { CommandInfo }     from './tangojs/struct/CommandInfo'
import { DbDatum }         from './tangojs/struct/DbDatum'
import { DeviceAttribute } from './tangojs/struct/DeviceAttribute'
import { DeviceInfo }      from './tangojs/struct/DeviceInfo'

/** @private */
export const struct = {
  AttributeInfo, CommandInfo, DbDatum, DeviceAttribute, DeviceInfo
}

import * as generatedTango from './tangojs/tango/generated'

/** @private */
export const tango = generatedTango
