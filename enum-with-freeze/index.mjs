import { VanillaEnum } from './enum-freeze.mjs'
import { MyEnum } from './enum-proxy.mjs'

// Enum.One = 'try to assign something else' // it throws Cannot assign exception

console.log({ VanillaEnum, MyEnum }) // { VanillaEnum: { One: 1, Two: 2, Three: 3 } }

console.log(MyEnum.PropertyOne)
console.log(MyEnum.PropertyTwo)
console.log(MyEnum.PropertyThree)
