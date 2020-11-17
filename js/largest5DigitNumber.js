const solution = (digits) => Math.max(...[...Array(digits.length - 4)]
  .map((_e, i) => +digits.slice(i, i + 5)));
