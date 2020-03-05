export class IdleTimer {

  expirationTime = 1000 * 5 // five seconds
  timer = null
  promiseResolve = null

  events = [
    'keypress',
    'mousedown',
    'mousemove',
    'scroll',
    'touchstart'
  ]

  eventHandler = (event) => {
    console.count(event.type)
    this.resetTimer()
  }

  constructor(time) {
    this.expirationTime = time || this.expirationTime
    return this.setupIdleTimer()
  }

  setupIdleTimer() {
    return new Promise((resolve) => {
      this.promiseResolve = resolve
      this.setupTimeout()
      this.setupListeners()
    })
  }

  setupListeners() {
    const events = this.events
    events.forEach(eventType => document.addEventListener(eventType, this.eventHandler))
  }

  removeListeners() {
    const events = this.events
    events.forEach(eventType => document.addEventListener(eventType, this.eventHandler))
  }

  bindResetTrigger(eventType) {
    document.addEventListener(eventType, () => {
      console.count('bind')
      this.resetTimer()
    })
  }

  setupTimeout() {
    const triggerTimeout = () => this.promiseResolve('timeout')
    this.timer = window.setTimeout(triggerTimeout, this.expirationTime)
  }

  resetTimer() {
    window.clearTimeout(this.timer)
    this.setupTimeout()
  }

}
