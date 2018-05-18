'use strict'

const passwordGenerator = length => {
  let password = ''
  do {
    password += Math
      .random()
      .toString(32)
      .substr(2)
  } while (password.length < length)
  password = password.substr(0, length)
  return password
}

const generatedPasswords = Array.from(new Array(6), () => passwordGenerator(32))
generatedPasswords.forEach(password => console.log(password))