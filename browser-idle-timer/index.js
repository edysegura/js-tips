import { IdleTimer } from './idle-timer.js'

function showExpiredMessage(data) {
  const feedbackMessage = 'Session expired!!!! ' + data
  const p = document.getElementById('expired-message')

  console.log(feedbackMessage)

  p.textContent = feedbackMessage
  p.classList.add('expired')
}

const fiveSeconds = 5000
new IdleTimer(fiveSeconds)
  .then(showExpiredMessage)
