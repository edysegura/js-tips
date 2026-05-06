import { throttle } from './throttle.js'

const input = document.querySelector('input')
const output = document.querySelector('output')
const wait = 500 // half a second

const efficientEventHandler = throttle((event) => {
  output.textContent = input.value
}, wait)

input.addEventListener('input', efficientEventHandler)
