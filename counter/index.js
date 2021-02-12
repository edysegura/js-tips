'use strict'

function updateUI(counter) {
  const output = document.querySelector('output')
  output.textContent = counter
}

updateUI(0)