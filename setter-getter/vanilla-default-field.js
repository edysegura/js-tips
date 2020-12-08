class Component {
  timeslice_ = 22

  get timeslice() {
    return this.timeslice_
  }

}

const component = new Component()
component.timeslice = 23
console.log(component.timeslice) // 22