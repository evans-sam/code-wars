function peak(array) {
  let leftSum = 0;
  let rightSum = array.reduce((sum, e) => sum + e);

  for (let i = 0; i < array.length; i += 1) {
    rightSum -= array[i];
    if (leftSum === rightSum) return i;
    leftSum += array[i];
  }
  return -1;
}

const peak = (array) => {
  return array.reduce((acc, e, i) => {
    return acc.leftSum === acc.rightSum ? { leftSum: acc.leftSum + e, rightSum: acc.rightSum - array[i + 1], result: i } : { ...acc, leftSum: acc.leftSum + e, rightSum: acc.rightSum - array[i + 1]}
  }, {
    result: -1,
    leftSum: 0,
    rightSum: array.slice(1).reduce((sum, e) => sum + e)
  }).result
}