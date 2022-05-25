// find other ways here https://www.samanthaming.com/pictorials/how-to-capitalize-a-string/
// you can also use CSS for that text-transform: capitalize
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function titleCase(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map(capitalize)
    .join(' ')
}

console.log(capitalize('edy segura'))
console.log(titleCase('edy segura'))
console.log(titleCase('edY segUra'))
