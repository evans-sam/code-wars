function josephusSurvivor(n, k) {
  const array = [...Array(n).keys()].map(i => i + 1);
  let e = 0

  while(array.length > 1) {
    e += k - 1
    e %= array.length
    array.splice(e, 1)
  }

  return array[0]
}
