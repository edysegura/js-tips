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

const { length, 0: firstOne, [length - 1]: lastOne } = names
console.log({ firstOne, lastOne }) // { firstOne: 'Aerith Gainsborough', lastOne: 'Zack Fair' }
