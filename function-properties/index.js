'use strict'

function generator() {
  if (!generator.counter) {
    generator.counter = 0
  }
  return generator.counter++
}

console.log(generator())
console.log(generator())
console.log(generator())
console.log(generator())
