import { Enum } from './Enum'

/**
 * Attribute write type.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/Tango/AttrWriteType.html
 */
export const AttributeWriteType = Enum({
  READ:             0,
  READ_WITH_WRITE:  1,
  READ_WRITE:       3,
  WRITE:            2
})
