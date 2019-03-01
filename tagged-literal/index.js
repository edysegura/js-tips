'use strict'

const myTag = (template, ...values) => {
  const uppercaseValue = (accumulator, it, index) => {
    return `${accumulator}${values[index - 1].toUpperCase()}${it}`
  }
  return template.reduce(uppercaseValue)
}

const name = 'Edy Segura'
const city = 'Santa Rita do Sapucaí'

const output = myTag`Hi! I'm ${name} and I live in ${city}.`
console.log(output)
