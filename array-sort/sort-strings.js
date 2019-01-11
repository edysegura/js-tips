'use strict'

const wordList = ['Maçã', 'Abacate', 'Uva', 'Pitaya']
const byAlphabeticalOrder = (wordA, wordB) => ('' + wordA).localeCompare(wordB)

wordList.sort(byAlphabeticalOrder)
console.log(wordList) // [ 'Abacate', 'Maçã', 'Pitaya', 'Uva' ]
