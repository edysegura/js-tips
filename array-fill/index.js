function generateNumbers(size = 0) {
  // it is just a possibility, don't use this on production as it isn't performant
  const numbers = Object.keys(new Array(size).fill(null)).map(Number)
  return numbers
}

console.log(generateNumbers(10))
