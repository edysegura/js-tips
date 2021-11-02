const names = [
  'Aerith Gainsborough',
  'Barret Wallace',
  'Cait Sith',
  'Cid Highwind',
  'Cloud Strife',
  'Red XIII',
  'Tifa Lockhart',
  'Vincent Valentine',
  'Yuffie Kisaragi',
  'Zack Fair',
]

const [ firstOne ] = names
const lastOne = names[ names.length - 1 ]
// const lastOne = names.at(-1) // available at Node.js v17+

// const [ lastOne ] = [...names].reverse()
// const lastOne = [...names].pop()

console.log(`First one: ${firstOne}`)
console.log(`Last one: ${lastOne}`)
