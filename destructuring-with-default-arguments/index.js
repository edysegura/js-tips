'use strict'

function doSomething({ text = 'Default Text', line = 0, truncate = 100 } = {}) {
  console.log(text, line, truncate)
}

doSomething()

doSomething({
  text: 'Edy Segura'
})
