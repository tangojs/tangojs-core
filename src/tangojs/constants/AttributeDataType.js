import { Enum } from './Enum'

/**
 * Attribute data type.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/Tango/AttributeDataType.html
 */
export const AttributeDataType = Enum({
  ATT_BOOL:     0,
  ATT_DOUBLE:   5,
  ATT_ENCODED:  13,
  ATT_FLOAT:    4,
  ATT_LONG:     2,
  ATT_LONG64:   3,
  ATT_SHORT:    1,
  ATT_STATE:    11,
  ATT_STRING:   10,
  ATT_UCHAR:    6,
  ATT_ULONG:    8,
  ATT_ULONG64:  9,
  ATT_USHORT:   7,
  DEVICE_STATE: 12,
  NO_DATA:      14
})
