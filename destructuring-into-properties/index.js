'use strict'

const myObject = {}
const person = { name: 'Edy' }

;({ name: myObject.name } = person)

console.log(myObject)
