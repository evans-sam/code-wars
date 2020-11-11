const triangular = (n) => {
  let result = 0;
  for (let i = n; i > 0; i -= 1) {
    result += i;
  }
  return result;
};
