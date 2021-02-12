'use strict'

function updateUI(counter) {
  const output = document.querySelector('output')
  output.textContent = counter
}

updateUI(0)

let counter = 0
setInterval(() => {
  updateUI(counter++)
}, 1000)