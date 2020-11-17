const perimeter = (n) => {
  let a = 0;
  let b = 1;
  let fN;
  for (let i = 1; i <= n + 3; i += 1) {
    fN = a + b;
    a = b;
    b = fN;
  }

  return 4 * (fN - 1);
};
