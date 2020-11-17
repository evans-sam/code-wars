function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const j = numbers.lastIndexOf(target - numbers[i])
    if (j > 0) return [i, j]
  }
  return null
}

const twoSum = (numbers, target) => {
  return numbers.reduce((acc, n, i) => {
    const j = numbers.lastIndexOf(target - n)
    return j != -1 && i != j ? [i, j] : acc
  }, [])
}
