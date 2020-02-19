class Component {
  timeslice_ = 22

  /*
  set timeslice(value) {
    this.timeslice_ = value
  }
  */

  get timeslice() {
    return this.timeslice_
  }

}

const comp = new Component()
comp.timeslice = 23
console.log(comp.timeslice)