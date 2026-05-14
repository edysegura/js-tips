'use strict'

const wordList = ['Maçã', 'Abacate', 'Uva', 'Pitaya']
const byAlphabeticalOrder = (wordA, wordB) => ('' + wordA).localeCompare(wordB)

wordList.sort(byAlphabeticalOrder)
console.log(wordList) // [ 'Abacate', 'Maçã', 'Pitaya', 'Uva' ]

// Ref.: https://stackoverflow.com/questions/51165/how-to-sort-strings-in-javascript
