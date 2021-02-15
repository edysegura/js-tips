'use strict'

function updateUI(counter) {
  const output = document.querySelector('output')
  output.textContent = counter
}

/**
 * How to make the counter work accurately and efficiently across browsers
 *
 * Most of counters loose accuracy over time! That is why of the implementation below
 * check more details on this link: https://www.youtube.com/watch?v=MCi6AZMkxcU
 */
const start = Date.now()
const delay = 1000

setInterval(() => {
  const elapsed = Date.now() - start
  const seconds = Math.floor(elapsed / 1000)
  updateUI(seconds)
}, delay)
