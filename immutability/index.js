'use strict'

const snorlax = {
  number: 143,
  name: 'Snorlax',
  type: 'Normal',
  evolution: {
    munchlax: '446',
  },
}

// Object.freeze() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// This method just do a shallow freeze, in order to do a deepFreeze there is an example on link above
Object.freeze(snorlax)
Object.freeze(snorlax.evolution)
// there are two others similar methos
// Object.seal() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// Object.preventExtension()- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

snorlax.name = 'Jigglypuff'
snorlax.evolution.munchlax = '001'
console.log(snorlax)
