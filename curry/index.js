'use strict'

function validation(mode, threshold) {
  if (mode === 'Max') {
    return input => input > threshold
  } else if (mode === 'Min') {
    return input => input < threshold
  }
  return null;
}

const max = validation('Max', 21)
const min = validation('Min', 18)

console.log(max(12))
console.log(max(22))