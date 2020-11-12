const pairs = (array) => array
  .reduce((acc, n, i) => (i % 2 ? [...acc, [array[i - 1], n]] : acc), [])
  .reduce((count, [x, y]) => (Math.abs(x - y) === 1 ? count + 1 : count), 0);
