'use strict'

// Reference: https://stackoverflow.com/a/47812770/1634092

function getName(d){
  const error = new Error();
  const functionName = ((((error.stack.split('at ') || [])[1 + d] || '')
    .match(/(^|\.| <| )(.*[^(<])( \()/) || [])[2] || '')
    .split('.')
    .pop();
  return functionName
}

function limbo() {
  for (let i = 0; i < 4; i++) {
    console.log(getName(i))
  }
}

function lust() {
  limbo()
}

function gluttony() {
  lust()
}

gluttony()
