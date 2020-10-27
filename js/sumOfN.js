const sumOfN = (n) => {
  const sign = n > 0 ? 1 : -1;
  let sum = 0;
  return [...Array(Math.abs(n) + 1)]
    .map((_e, i) => {
      sum += i * sign;
      return sum;
    });
};
