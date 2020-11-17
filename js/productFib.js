const productFib = (p) => {
  let a = 0;
  let b = 1;
  let fN;
  while (a * b < p) {
    fN = a + b;
    a = b;
    b = fN;
  }

  return [a, b, a * b === p];
};
