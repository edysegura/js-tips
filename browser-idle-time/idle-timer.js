export class IdleTimer {

  expirationTime = 1000 * 5 // one minute
  timer = null
  promiseResolve = null

  constructor(time) {
    this.expirationTime = time || this.expirationTime
    return this.setupIdleTimer()
  }

  setupIdleTimer() {
    return new Promise((resolve) => {
      this.promiseResolve = resolve
      this.setupNotification()
      this.setupListeners()
    })
  }

  setupListeners() {
    document.addEventListener('keyup', () => {
      this.resetTimer()
    })
  }

  setupNotification() {
    const triggerNotification = () => this.promiseResolve('timeout')
    this.timer = window.setTimeout(triggerNotification, this.expirationTime)
  }

  resetTimer() {
    window.clearTimeout(this.timer)
    this.setupNotification()
  }

}
