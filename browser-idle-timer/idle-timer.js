import { throttle } from './throttle.js';

export class IdleTimer {

  expirationTime = 1000 * 60 // one minute
  timer = null
  promiseResolve = null

  events = [
    'keypress',
    'mousedown',
    'mousemove',
    'scroll',
    'touchstart'
  ]

  eventHandler = () => {
    const delay = 400
    return throttle((event) => {
      console.count(event.type)
      this.resetTimer()
    }, delay)
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
    events.forEach(eventType => document.addEventListener(eventType, this.eventHandler()))
  }

  removeListeners() {
    // FIXME It is not really removing the listeners
    const events = this.events
    events.forEach(eventType => document.removeEventListener(eventType, this.eventHandler()))
  }

  bindResetTrigger(eventType) {
    document.addEventListener(eventType, () => {
      console.count('bind')
      this.resetTimer()
    })
  }

  setupTimeout() {
    const triggerTimeout = () => {
      this.promiseResolve(Date.now())
      this.removeListeners()
    }

    this.timer = window.setTimeout(triggerTimeout, this.expirationTime)
  }

  resetTimer() {
    window.clearTimeout(this.timer)
    this.setupTimeout()
  }

}
