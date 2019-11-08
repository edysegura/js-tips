const getAbsoluteUrl = (() => {
  let link;

  return (relativePath) => {
    if(!link) link = document.createElement('a')
    link.href = relativePath
    return link.href
  }
})()

const output = document.querySelector('output')
output.textContent = getAbsoluteUrl('/relative-path')