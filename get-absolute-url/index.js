const getAbsoluteUrl = (() => {
  let link;

  return (url) => {
    if(!link) link = document.createElement('a')
    link.href = url
    return link.href
  }
})()

const output = document.querySelector('output')
output.textContent = getAbsoluteUrl('/relative-path')