
const add = (n) => {
  let sum = n;
  const resultFn = (y) => {
    sum += y
    return resultFn;
  }
  resultFn.valueOf = () => {
    return sum;
  }

  return resultFn;
}
