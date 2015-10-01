
import { Enum } from './Enum'

/**
 * Error severity.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/Tango/ErrSeverity.html
 */
export const ErrorSeverity = Enum({
  ERR:   1,
  PANIC: 2,
  WARN:  0
})
