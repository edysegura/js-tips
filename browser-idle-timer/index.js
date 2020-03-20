import { IdleTimer } from './idle-timer.js'

function showExpiredMessage(data) {
  const p = document.getElementById('expired-message')
  p.textContent = 'Session expired!!!! ' + data
  p.classList.add('expired')
}

const fiveSeconds = 5000
new IdleTimer(fiveSeconds)
  .then(showExpiredMessage)
