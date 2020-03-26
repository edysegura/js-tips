/**
 * Exectue an action which needs to be throttled
 * @param {*} action it is the function that need to be throttled
 * @param {*} delay the time interval in milliseconds
 */
export function throttle(action, delay) {
  let timerId
  return function throttler (...params) {
    if (timerId) return
    timerId = setTimeout(() => {
      action(...params)
      timerId = null
    }, delay)
  }
}
