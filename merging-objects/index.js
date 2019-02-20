'use strict'

const myFirstObject = {
  propertyOne: 'value one',
  propertyTwo: false,
  propertyThree: 101
}

const mySecondObject = {
  propertyTwo: true,
  propertyFour: { hi: 5 }
}

const mergedObject = { ...myFirstObject, ...mySecondObject }

console.log(mergedObject)
