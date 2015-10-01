import { Enum } from './Enum'

/**
 * Attribute quality.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/Tango/AttrQuality.html
 */
export const AttributeQuality = Enum({
  ATTR_ALARM:    2,
  ATTR_CHANGING: 3,
  ATTR_INVALID:  1,
  ATTR_VALID:    0,
  ATTR_WARNING:  4
})
