function times(number) {
  return Array.from({ length: number }).map((_, index) => index)
}

console.log(times(9))
