'use strict'

const getUniqueValues = list => [ ...new Set(list) ]
const uniqueValues = getUniqueValues([ 'Lidy', 'Davi', 'Edy', 'Davi', 'Davi' ])

console.log(uniqueValues)
