const listOfList = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const flattening = (accumulator, currentValue) => [
  ...accumulator,
  ...currentValue,
]

const flatOne = listOfList.reduce(flattening)
const flatTwo = [].concat.apply([], listOfList)
const flatThree = listOfList.flat()

console.log(listOfList)
console.log(flatOne)
console.log(flatTwo)
console.log(flatThree)
