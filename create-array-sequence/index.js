'use strict'

const n = 10
const generatedListOne = Array.from(Array(n).keys())
const generatedListTwo = [...Array(n).keys()]

console.log('generatedListOne: ', generatedListOne);
console.log('generatedListTwo: ', generatedListTwo);