/**
 * Execute an action which needs to be throttled
 * @param { Function } performAction An action to be performed that need to be throttled
 * @param { number } wait Time in milliseconds to wait before perform the action
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
