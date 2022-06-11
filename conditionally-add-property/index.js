const trueCondition = true
const falseCondition = false

const obj = {
  ...(trueCondition && { dogs: 'woof' }),
  ...(falseCondition && { cats: 'meow' }),
}

console.log({ obj }) // { dogs: 'woof' }
