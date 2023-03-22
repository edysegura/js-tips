// https://javascript.info/custom-errors

class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

function test() {
  throw new ValidationError('Whoops!')
}

try {
  test()
} catch (error) {
  console.log(error.message) // Whoops!
  console.log(error.name) // ValidationError
  // console.log(error.stack) // a list of nested calls with line numbers for each
}
