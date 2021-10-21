'use strict'

const dataStructure = {
  a: null,
  b: undefined,
  c: 'any-value',
}

console.log('+null: ', +null)
console.log('+undefined: ', +undefined)
console.log(JSON.stringify(dataStructure), 'Where are the property b?')
