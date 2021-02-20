'use strict'

function updateUI(second) {
  const output = document.querySelector('output')
  output.textContent = second
}

/**
 * How to make the counter work accurately and efficiently across browsers
 *
 * Most of counters loose accuracy over time! That is why of the implementation below
 * check more details on this link: https://www.youtube.com/watch?v=MCi6AZMkxcU
 *
 * v1 regular counter ( Out of sync on long running )
 * v2 using object Date to be in sync ( Out of sync on long running )
 * v3 using requestAnimationFrame ( CPU consuming )
 */
const start = Date.now()
function frame() {
  const elapsed = Date.now() - start
  const seconds = Math.floor(elapsed / 1000)
  updateUI(seconds)
  requestAnimationFrame(frame)
}
frame()
