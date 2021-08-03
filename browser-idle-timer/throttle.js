/**
 * Execute an action which needs to be throttled
 * @param { Function } performAction it is the function that need to be throttled
 * @param { number } wait the wait in milliseconds
 */
export function throttle(performAction, wait) {
  let timerId
  return (...params) => {
    if (timerId) return
    timerId = setTimeout(() => {
      performAction(...params)
      timerId = null
    }, wait)
  }
}
