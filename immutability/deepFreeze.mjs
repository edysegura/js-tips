export function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object)

  for (const name of propNames) {
    const value = object[name]
    if (value && typeof value === 'object') {
      deepFreeze(value)
    }
  }

  return Object.freeze(object)
}
