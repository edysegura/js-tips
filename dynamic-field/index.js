function objectify(fieldName, value) {
  return {
    [ fieldName ]: value
  }
}

console.log(objectify('name', 'Edy Segura'))
console.log(objectify('email', 'email@domain.com'))