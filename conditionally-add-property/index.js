const trueCondition = true
const falseCondition = false

const animalsSound = {
  cows: 'moo',
  ...(trueCondition && { dogs: 'woof' }),
  ...(falseCondition && { cats: 'meow' }),
}

console.log({ animalsSound }) // { dogs: 'woof' }
