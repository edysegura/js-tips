const snorlax = {
  number: 143,
  name: 'Snorlax',
  type: 'Normal'
}

Object.freeze(snorlax)

snorlax.name = 'Jigglypuff'
console.log(snorlax.name)
