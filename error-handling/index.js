// https://javascript.info/custom-errors

export class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

export class EmailError extends Error {
  constructor(message) {
    super(message)
    this.name = 'EmailError'
  }
}

export function testValidationError() {
  throw new ValidationError('Whoops!')
}

export function testEmailError() {
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
