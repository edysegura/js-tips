const currentValues = [1, 2, 3, 6]
const newValues = [1, 2, 4, 5]
const toRemove = currentValues.filter((cv) => !newValues.includes(cv))
const toAdd = newValues.filter((nv) => !currentValues.includes(nv))
console.log({ toRemove, toAdd })
