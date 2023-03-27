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

const dayAfterTomorrow = Date.now() + 48 * 60 * 60 * 1000
const deadline = new Date(dayAfterTomorrow)

function update() {
  const timer = countDownTimer(deadline)
  const output = document.querySelector('p')
  output.textContent = `${timer.days} day(s), ${timer.hours} hour(s), ${timer.minutes} minute(s), and ${timer.seconds} second(s) left`
}

update()
setInterval(() => {
  update()
}, 1000)
