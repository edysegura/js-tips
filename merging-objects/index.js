const myFirstObject = {
  propertyOne: 'value one',
  propertyTwo: false,
  propertyThree: 101
}

const mySecondObject = {
  propertyTwo: true
}

const mergedObject = { ...myFirstObject, ...mySecondObject }

console.log(mergedObject)
