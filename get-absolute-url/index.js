const getAbsoluteUrl = (() => {
  let link

  return (relativePath = '') => {
    if (!link) link = document.createElement('a')
    link.href = relativePath
    return link.href
  }
})()

const input = document.querySelector('input')
const button = document.querySelector('button')
const output = document.querySelector('output')

const buildAbsoluteUrl = () => {
  output.textContent = getAbsoluteUrl(input.value)
  const { protocol, host } = document.location
  output.innerHTML += `<br />${protocol}//${host}${input.value}`
}

button.addEventListener('click', buildAbsoluteUrl)
