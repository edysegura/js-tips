// https://javascript.info/custom-errors

class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

class EmailError extends Error {
  constructor(message) {
    super(message)
    this.name = 'EmailError'
  }
}

function testValidationError() {
  throw new ValidationError('Whoops!')
}

function testEmailError() {
  throw new EmailError('Invalid email format')
}

try {
  testValidationError()
} catch (error) {
  console.log(`name: ${error.name}, message: ${error.message}`)
}

try {
  testEmailError()
} catch (error) {
  console.log(`name: ${error.name}, message: ${error.message}`)
} finally {
  console.log('Finally always runs')
}
