'use strict'

function getErrorMessageSwitch(errorCode) {
  let errorMessage = ''
  switch (errorCode) {
    case '001':
      errorMessage = 'Error message from code 001'
      break
    case '002':
      errorMessage = 'Error message from code 002'
      break
    case '003':
      errorMessage = 'Error message from code 003'
      break
    case '004':
      errorMessage = 'Error message from code 004'
      break
    default:
      errorMessage = 'No error message was found'
  }
  return errorMessage
}

function getErrorMessageLiteral(errorCode) {
  const errorMessages = {
    '001': 'Error message from code 001',
    '002': 'Error message from code 002',
    '003': 'Error message from code 003',
    '004': 'Error message from code 004',
    default: 'No error message was found'
  }
  return errorMessages[ errorCode ] || errorMessages.default
}

console.log(getErrorMessageLiteral('004'))
