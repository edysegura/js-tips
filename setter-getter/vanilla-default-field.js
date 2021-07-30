// 'use strict'

/**
 * This example works on Node.js v14+
 */
class Component {
  #timeSlice = 22

  get timeSlice() {
    return this.#timeSlice
  }

}

const component = new Component()
component.timeSlice = 23
console.log(component.timeSlice) // 22
