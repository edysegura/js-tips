class MyClass {
  #myField

  constructor() {
    this.#myField = 'Edy Segura'
  }

  getMyField() {
    return this.#myField
  }
}

const myObject = new MyClass()
console.log(myObject.getMyField()) // Edy Segura
console.log(myObject['#myField']) // undefined
