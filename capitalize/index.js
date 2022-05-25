// find other ways here https://www.samanthaming.com/pictorials/how-to-capitalize-a-string/
// you can also use CSS for that text-transform: capitalize
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(capitalize('edy segura'))
