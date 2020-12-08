class MyClass {
  #myField

  constructor() {
    this.#myField = 'Edy Segura'
  }

  getMyField() {
    return this.#myField
  }
}

console.log(new MyClass().getMyField()) // Edy Segura
console.log(new MyClass().myField) // undefined
