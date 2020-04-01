/**
 * It limits the rate at which a function can fire
 * @param {Function} action
 * @param {Number} wait
 */
export function debounce(action, wait) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(action, wait)
  }
}
