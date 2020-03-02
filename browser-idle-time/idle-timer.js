export class IdleTimer {

  expirationTime = 1000 * 60 // one minute
  timer = null

  constructor(time) {
    this.expirationTime = time || this.expirationTime
    return this.setupIdleTimer()
  }

  setupIdleTimer() {
    return new Promise((resolve) => {
      this.timer = window.setTimeout(() => resolve('timeout'), this.expirationTime)
    })
  }

}
