'use strict'

async function main() {
  const p = document.querySelector('p')
  const response = await fetch('https://httpbin.org/ip')
  const ip = await response.json()

  p.textContent = ip.origin
}

main()