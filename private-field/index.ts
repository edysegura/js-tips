class Person {
  private myField: string

  constructor() {
    this.myField = 'Edy Segura'
  }

  getMyField(): string {
    return this.myField
  }
}

const person = new Person()
console.log(person.getMyField()) // Edy Segura
console.log(person.myField) // undefined
