'use strict'

function generator() {
  if (!generator.counter) {
    generator.counter = 0
  }
  return ++generator.counter
}

console.log(generator())
console.log(generator())
console.log(generator())
console.log(generator())
console.log(Object.keys(generator))

// -----------------------------------------

const counterSymbol = Symbol('counter')

function generator2() {
  if (!generator2[counterSymbol]) {
    generator2[counterSymbol] = 0
  }
  return ++generator2[counterSymbol]
}

console.log(generator2())
console.log(generator2())
console.log(Object.keys(generator2))

// -----------------------------------------

const generator3 = (() => {
  let counter = 0
  return () => ++counter
})()

console.log(generator3()) // 1
console.log(generator3()) // 2
// counter is completely inaccessible
