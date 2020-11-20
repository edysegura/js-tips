// deno run index.ts

function validation(mode: 'Max' | 'Min', threshold: number): Function {
  if (mode === 'Max') {
    return (input: number) => input > threshold
  } else if (mode === 'Min') {
    return (input: number) => input < threshold
  }
  return () => threshold
}

const max = validation('Max', 21)
const min = validation('Min', 18)

console.log('12 > 21 =', max(12))
console.log('22 > 21 =', max(22))
