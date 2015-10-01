import { Enum } from './Enum'

/**
 * Device state.
 * @see http://www.esrf.eu/computing/cs/tango/tango_doc/kernel_doc/tango_java_api/classes/fr/esrf/Tango/DevState.html
 */
export const DeviceState = Enum({
  ALARM:    11,
  CLOSE:    2,
  DISABLE:  12,
  EXTRACT:  5,
  FAULT:    8,
  INIT:     9,
  INSERT:   4,
  MOVING:   6,
  OFF:      1,
  ON:       0,
  OPEN:     3,
  RUNNING:  10,
  STANDBY:  7,
  UNKNOWN:  13
})
