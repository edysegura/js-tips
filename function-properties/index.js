'use strict'

function generator() {
  if (!generator.counter) {
    generator.counter = 0
  }
  return ++generator.counter
}

console.log('Method 1: ' + generator())
console.log('Method 1: ' + generator())
console.log('Method 1: ' + generator())
console.log('Method 1: ' + generator())
console.log('Method 1: ' + Object.keys(generator))

// -----------------------------------------

const counterSymbol = Symbol('counter')

function generator2() {
  if (!generator2[counterSymbol]) {
    generator2[counterSymbol] = 0
  }
  return ++generator2[counterSymbol]
}

console.log('Method 2: ' + generator2())
console.log('Method 2: ' + generator2())
console.log('Method 2: ' + Object.keys(generator2))

// -----------------------------------------

const generator3 = (() => {
  let counter = 0
  return () => ++counter
})()

console.log('Method 3: ' + generator3()) // 1
console.log('Method 3: ' + generator3()) // 2
// counter is completely inaccessible
