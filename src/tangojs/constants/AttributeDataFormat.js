import { Enum } from './Enum'

/**
 * Attribute data format.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/Tango/AttrDataFormat.html
 */
export const AttributeDataFormat = Enum({
  FMT_UNKNOWN:  3,
  IMAGE:        2,
  SCALAR:       0,
  SPECTRUM:     1
})
