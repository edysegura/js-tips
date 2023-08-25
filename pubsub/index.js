const pubSub = {
  events: {},
  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = []
    this.events[event].push(callback)
  },
  publish(event, data) {
    if (this.events[event])
      this.events[event].forEach((callback) => callback(data))
  },
  unsubscribe(event, callback) {
    if (this.events[event])
      this.events[event] = this.events[event].filter((cb) => cb !== callback)
  },
}

const namedCallback = (data) => console.log(`[Named callback] ${data}`)
pubSub.subscribe('update', (data) => console.log(data))
pubSub.subscribe('update', namedCallback)
pubSub.publish('update', 'Some update')
pubSub.unsubscribe('update', namedCallback)
pubSub.publish('update', 'Another update')
