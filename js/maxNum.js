const maxNum = (num, opers) => {
  const array = Array(num).fill(0);

  opers.forEach(([start, end, x]) => {
    for (let i = start; i <= end; i += 1) array[i] += x;
  });

  return Math.max(...array);
}

const maxNum = (n, queries) => {
  let max = 0;

  const array = queries.reduce((acc, [a, b, k]) => {
    acc[a] += k;
    acc[b + 1] -= k;
    return acc;
  }, Array(n + 1).fill(0));

  for (let i = 1; i < array.length; i += 1) {
    array[i] += array[i - 1];
    max = array[i] > max ? array[i] : max;
  }

  return max;
};