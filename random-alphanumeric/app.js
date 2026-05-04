'use strict'

function alphaRandom(length = 36) {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  let text = ""

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

const button = document.querySelector('button')
const output = document.querySelector('output')

button.addEventListener('click', () => {
  output.textContent = alphaRandom()
})
