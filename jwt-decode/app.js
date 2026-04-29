const input = document.querySelector('input')
const pre = document.querySelector('pre')

const parsedJWT = JSON.parse(window.atob(input.value.split('.')[1]))
const json = JSON.stringify(parsedJWT, null, 2)
pre.textContent = json
