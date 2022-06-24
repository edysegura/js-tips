const currentValues = [1, 2, 3]
const newValues = [4, 2]
const diff1 = currentValues.filter((cv) => newValues.includes(cv))
const diff2 = newValues.filter((nv) => !currentValues.includes(nv))
console.log({ diff1, diff2 })
