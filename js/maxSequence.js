const maxSequence = (array) => {
  let [bestSum, currentSum] = [0, 0];
  for (let i = 0; i < array.length; i += 1) {
    currentSum = Math.max(0, currentSum + array[i]);
    bestSum = Math.max(bestSum, currentSum);
  }
  return bestSum;
};

const maxSequence = (array) => {
  return best.reduce((acc, v) => {
    const current = Math.max(0, acc.current + v)
    const best = Math.max(acc.best, current)
    return {
      current: current,
      best: best,
    }
  })
}