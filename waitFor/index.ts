function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function waitFor(condition: () => boolean, maxAttempts = 50) {
  let attempt = 0
  console.log('Waiting for condition to be true...')
  do {
    console.count('Attempts')
    await sleep(attempt === 0 ? 300 : 75)
    attempt++
    if (attempt === maxAttempts) throw new Error('Max attempts reached!')
  } while (!condition() && attempt < maxAttempts)
}

async function main() {
  const condition = () => Math.random() > 1
  await waitFor(condition)
  console.log('Condition is true!')
}

main()