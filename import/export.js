const js = `export default 'Returned value'`
const dataUri = `data:text/javascript;charset=utf-8,${encodeURIComponent(js)}`

import(dataUri).then((module) => {
  console.log(module.default) // Returned value
})
