const originalNumbers = (finalNumbers, turns) => {
  const sum = finalNumbers.reduce((sum, n) => sum + n, 0) / (finalNumbers.length - 1);
  const numbers = finalNumbers.map((n) => sum - n);
  return turns > 0 ? originalNumbers(numbers, turns - 1) : finalNumbers;
};

console.log(originalNumbers([26, 25, 29], 4), [1, 0, 4]);
console.log(originalNumbers([1248, 1226, 1204, 1182], 3), [12, 34, 56, 78]);
console.log(originalNumbers([796, 824, 790, 776], 3), [30, 2, 36, 50]);
