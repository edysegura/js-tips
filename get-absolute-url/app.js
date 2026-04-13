const getAbsoluteUrl = (() => {
  let link
  return (relativePath = '') => {
    if (!link) link = document.createElement('a')
    link.href = relativePath
    return link.href
  }
})()

const input = document.querySelector('input')
const form = document.querySelector('form')
const output = document.querySelector('output')

const buildAbsoluteUrl = () => {
  output.textContent = `Link trick: ${getAbsoluteUrl(input.value)}`
  const { protocol, host } = document.location
  output.innerHTML += `<br /><code>document.location</code>: ${protocol}//${host}${input.value}`
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  buildAbsoluteUrl()
})
