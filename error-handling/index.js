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

function test() {
  throw new ValidationError('Whoops!')
}

function emailTest() {
  throw new EmailError('Invalid email format')
}

try {
  test()
} catch (error) {
  console.log(error.message) // Whoops!
  console.log(error.name) // ValidationError
}

try {
  emailTest()
} catch (error) {
  console.log(error.message) // Invalid email
  console.log(error.name) // EmailError
} finally {
  console.log('Finally always runs')
}
