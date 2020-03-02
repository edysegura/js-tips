import { IdleTimer } from './idle-timer.js'

new IdleTimer()
  .then(() => console.log('Time expired!'))