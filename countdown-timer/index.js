function countDownTimer(deadline) {
  const timeLeft = Date.parse(deadline) - Date.now()
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

// const deadline = '2023-02-01'
const dayAfterTomorrow = Date.now() + 48 * 60 * 60 * 1000
const deadline = new Date(dayAfterTomorrow)
function update() {
  const timer = countDownTimer(deadline)
  const output = document.querySelector('p')
  output.innerHTML = `${timer.days} days, ${timer.hours} hours, ${timer.minutes} minutes, and ${timer.seconds} seconds left`
}

update()
setInterval(() => {
  update()
}, 1000)
