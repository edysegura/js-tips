'use strict'

function myFunction({ text = '', line = 0, truncate = 100} = {}) {
  console.log(text, line, truncate)
}

myFunction({
  text: 'Edy Segura'
})

myFunction()
