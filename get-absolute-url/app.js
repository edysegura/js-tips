const input = document.querySelector('input')
const form = document.querySelector('form')
const output = document.querySelector('output')

const getAbsoluteUrlLinkHack = (() => {
  let link
  return (relativePath = '') => {
    if (!link) link = document.createElement('a')
    link.href = relativePath
    return link.href
  }
})()

const getAbsoluteUrlDocument = (relativePath = '') => {
  const { protocol, host } = document.location
  return `${protocol}//${host}/${relativePath}`
}

const showAbsoluteUrl = () => {
  output.innerHTML = `
    <ul>
      <li>
        <strong>Link trick: </strong>
        <span>${getAbsoluteUrlLinkHack(input.value)}</span>
      </li>
      <li>
        <strong>Document object: </strong>
        <span>${getAbsoluteUrlDocument(input.value)}</span>
      </li>
    </ul>
  `
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  showAbsoluteUrl()
})
