class MyClass {
  #myField

  constructor() {
    this.#myField = 'Edy Segura'
  }

  getMyField() {
    return this.#myField
  }
}

console.log(new MyClass().getMyField())
console.log(new MyClass().myField) // undefined
