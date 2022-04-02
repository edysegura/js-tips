'use strict'

const MyEnum = new Proxy({}, {
  get(_, property) {
    return property
  }
})

console.log(MyEnum.PropertyOne)
console.log(MyEnum.PropertyTwo)
console.log(MyEnum.PropertyThree)

MyEnum.PropertyOne = 'Whatever'
console.log(MyEnum.PropertyOne)
console.log(MyEnum.PropertyOne === MyEnum.PropertyOne)
