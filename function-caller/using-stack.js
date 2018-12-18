'use strict'

// Reference: https://stackoverflow.com/a/47812770/1634092

function getFunctionName(depthOfStack){
  const error = new Error();
  const functionName = ((((error.stack.split('at ') || [])[1 + depthOfStack] || '')
    .match(/(^|\.| <| )(.*[^(<])( \()/) || [])[2] || '')
    .split('.')
    .pop();
  return functionName
}

function limbo() {
  for (let depth = 0; depth < 4; depth++) {
    console.log(getFunctionName(depth))
  }
}

function lust() {
  limbo()
}

function gluttony() {
  lust()
}

gluttony()
