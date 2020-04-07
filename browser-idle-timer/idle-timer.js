import { throttle } from './throttle.js';

export class IdleTimer {

  expirationTime = 1000 * 60 // one minute
  eventHandler = null
  promiseResolve = null
  timer = null

  events = [
    'keypress',
    'mousedown',
    'mousemove',
    'scroll',
    'touchstart'
  ]

  constructor(time) {
    this.expirationTime = time || this.expirationTime
    this.eventHandler = this.createEventHandler()
    return this.setupIdleTimer()
  }

  createEventHandler() {
    const wait = 400
    return throttle((event) => {
      console.count(event.type)
      this.resetTimer()
    }, wait)
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
    events.forEach(eventType => document.removeEventListener(eventType, this.eventHandler))
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
