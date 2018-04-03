'use strict'

function doSomething({ text = '', line = 0, truncate = 100} = {}) {
  console.log(text, line, truncate)
}

doSomething({
  text: 'Edy Segura'
})

doSomething()
