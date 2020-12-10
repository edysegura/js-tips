/**
 * This example works on Node.js v14+
 */
class Component {
  #timeslice = 22

  get timeslice() {
    return this.#timeslice
  }

}

const component = new Component()
component.timeslice = 23
console.log(component.timeslice) // 22
