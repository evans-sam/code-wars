const findOdd = (array) => array
  .reduce((counts, n) => ({ ...counts, [n]: (counts[n] || 0) + 1 }), {});
