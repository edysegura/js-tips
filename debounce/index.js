import { debounce } from "./debounce.js"

const input = document.querySelector('input')
const output = document.querySelector('output')
const wait = 1000 // one second in milliseconds

const efficientEventHandler = debounce((event) => {
  output.textContent = event.target.value
}, wait)

input.addEventListener('input', efficientEventHandler)