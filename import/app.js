const evaluationJsMethod1 = `console.log('Hello Everyone')`
const dataUriFromMethod1 = `data:text/javascript;charset=utf-8,${encodeURIComponent(evaluationJsMethod1)}`
import(dataUriFromMethod1)

const evaluationJsMethod2 = `export default 'Returned value'`
const dataUriFromMethod2 = `data:text/javascript;charset=utf-8,${encodeURIComponent(evaluationJsMethod2)}`
import(dataUriFromMethod2).then((module) => {
  console.log(module.default) // Returned value
})
