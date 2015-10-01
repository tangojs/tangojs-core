
/**
 * Enum factory. Enum is a function that maps value to the corresponding key
 * and has all key-value mappings attached.
 * @private
 * @param {Object} mapping from strings to unique identifiers
 * @return {Object} enum
 */
export function Enum(mapping) {

  let reverseMapping = Object.keys(mapping).reduce(
    (revMap, key) => (revMap[mapping[key]] = key, revMap),
    {}
  )

  return Object.freeze(
    Object.keys(mapping).reduce(
      (revMap, key) => (revMap[key] = mapping[key], revMap),
      v => reverseMapping[v]
    )
  )
}
