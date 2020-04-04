/**
 * Exectue an action which needs to be throttled
 * @param { Function } action it is the function that need to be throttled
 * @param { number } wait the wait in milliseconds
 */
export function throttle(action, wait) {
  let timerId
  return (...params) => {
    if (timerId) return
    timerId = setTimeout(() => {
      action(...params)
      timerId = null
    }, wait)
  }
}
