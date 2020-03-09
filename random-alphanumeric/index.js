'use strict'

function alphaRandom(stringLength) {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let text = "";
  for (var i = 0; i < stringLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const button = document.querySelector('button')
const output = document.querySelector('output')

button.addEventListener('click', () => {
  output.textContent = alphaRandom('32')
})