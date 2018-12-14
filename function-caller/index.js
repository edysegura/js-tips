// it doesn't work on strict mode
// 'use strict'

function one() {
  console.log('Function one was called')
  console.log('This function was called by: ', one.caller.name)
}

function two() {
  console.log('Function two was called')
  one()
}

two()
