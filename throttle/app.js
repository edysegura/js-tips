import { throttle } from './throttle.js'

const input = document.querySelector('input')
const output = document.querySelector('output')
const wait = 2000 // two seconds in milliseconds

const efficientEventHandler = throttle((event) => {
  output.textContent = event.data
}, wait)

input.addEventListener('input', efficientEventHandler)
