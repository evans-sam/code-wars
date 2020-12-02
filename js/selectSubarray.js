const selectSubarray = (array) => {
  const subArray = (i) => [...array.slice(0, i), ...array.slice(i + 1)];
  const subSum = (i) => subArray(i).reduce((a, b) => a + b, 0);
  const subProduct = (i) => subArray(i).reduce((a, b) => a * b, 1);
  const subQotient = (i) => Math.abs(subProduct(i) / subSum(i));
  const toSelections = ([[minQ, i, minE], ...acc], e, j) => {
    const subQofJ = subQotient(j);
    if (subQofJ < minQ) return [[subQofJ, j, e]];
    if (subQofJ === minQ) return [[minQ, i, minE], ...acc, [subQofJ, j, e]];
    return [[minQ, i, minE], ...acc];
  };

  const result = array
    .reduce((acc, e, j) => toSelections(acc, e, j), [[Infinity, 0, 0]])
    .map((e) => e.slice(1));

  return result.length === 1 ? result[0] : result;
};

console.log(selectSubarray([1, 23, 2, -8, 5]), [3, -8]);
console.log(selectSubarray([1, 3, 23, 4, 2, -8, 5, 18]), [2, 23]);
console.log(selectSubarray([10, 20, -30, 100, 200]), [[3, 100], [4, 200]]);
