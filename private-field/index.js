class MyClass {
  myPublicField
  #myPrivateField

  constructor() {
    this.myPublicField = 'This is public'
    this.#myPrivateField = 'This is private'
  }

  getMyPrivateField() {
    return this.#myPrivateField
  }
}

const myObject = new MyClass()
console.log(myObject.myPublicField) // this is public
console.log(myObject.getMyPrivateField()) // this is private
console.log(myObject['#myField']) // undefined
console.log(myObject) // MyClass { myPublicField: 'This is public' }
