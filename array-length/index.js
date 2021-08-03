'use strict'

const myList = [ 1, 2, 3, 4 ]
console.log(myList)

// removing the last one
const dropLastOne = 3
myList.length = dropLastOne
console.log(myList)

// cleaning the list
myList.length = 0
console.log(myList)
