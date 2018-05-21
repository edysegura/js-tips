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

const generatedPasswords = []
for (let i = 0; i < 6; i++) {
  generatedPasswords.push(passwordGenerator(32))
}

generatedPasswords
  .forEach(password => console.log(password))