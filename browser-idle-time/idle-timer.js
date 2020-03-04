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
    // TODO implement debounce and event detach as well remove listener when timeout
    events.forEach(this.bindResetTrigger.bind(this))
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
