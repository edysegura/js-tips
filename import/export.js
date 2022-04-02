const js = `export default 'Returned value'`
const dataUri = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(js)

import(dataUri).then((namespaceObject) => {
  console.log(namespaceObject.default) // Returned value
})
