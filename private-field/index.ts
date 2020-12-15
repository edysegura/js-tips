class Person {
  private name: string

  constructor() {
    this.name = 'Edy Segura'
  }

  getName(): string {
    return this.name
  }
}

const person = new Person()
console.log(person.getName()) // Edy Segura
console.log(person.name) // undefined
