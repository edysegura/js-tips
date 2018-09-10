const names = [
  "Cloud Strife",
  "Tifa Lockhart",
  "Aerith Gainsborough",
  "Barret Wallace",
  "Yuffie Kisaragi",
  "Vincent Valentine",
  "Zack Fair",
  "Red XIII",
  "Cait Sith",
  "Cid Highwind"
]

const [ firstOne ] = names
const lastOne = [...names].pop()

console.log(`First one: ${firstOne}`)
console.log(`Last one: ${lastOne}`)
