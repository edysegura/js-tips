'use strict'

const getUniqueValues = list => Array.from(new Set(list))
const uniqueValues = getUniqueValues([ 'Lidy', 'Davi', 'Edy', 'Davi', 'Davi' ])

console.log(uniqueValues)
