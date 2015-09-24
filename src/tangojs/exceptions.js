
// why those `returns` are here?
// https://github.com/jashkenas/coffeescript/issues/2359
// http://stackoverflow.com/questions/10805084/subclassing-native-objects-instanceof-not-working-properly
// http://stackoverflow.com/questions/19422145/property-in-subclass-of-error-not-set
// https://github.com/jashkenas/coffeescript/issues/2111

/**
 * Indicates invalid device name. Thrown by {@link DeviceProxy} constructor.
 */
export class InvalidDeviceNameException extends Error {
  /** @param {string} deviceName name of the device */
  constructor(deviceName) {
    return super(`${deviceName} is not a valid device name`)
  }
}
