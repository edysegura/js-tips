/**
 * It limits the rate at which a function can be fired
 * @param {Function} performAction An action to be performed
 * @param {Number} wait Time in milliseconds to wait before perform the action
 */
export function debounce(performAction, wait) {
  let timer = null
  return function (...params) {
    clearTimeout(timer)
    timer = setTimeout(
      () => performAction(...params),
      wait
    )
  }
}
