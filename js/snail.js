const snail = array => {
  return array.length <= 1 ? array[0][0] : [...array[0]]
}