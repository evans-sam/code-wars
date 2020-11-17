const multiply = (a) => (b) => {
  let carry = 0;

  const result = a
    .split('')
    .reduceRight((product, a) => {
      const p = +a * b + carry;
      carry = Math.floor(p / 10);
      return [p % 10, ...product];
    }, []);

  return [carry || '']
    .concat(result)
    .join('');
};

const integerSquareRoot = (number) => {
  let a = '1'; let
    b;
  for (let i = 1; true; i += 1) {
    b = a;
    a = multiply(i.toString())(i.toString());
    if (b <= number && a > number) return b;
  }
};
