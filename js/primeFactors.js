const primeFactorization = (number, result = []) => {
  const root = Math.sqrt(number);
  let x = 2;

  if (number % x) {
    x = 3;
    while ((number % x) && (x < root)) x += 2;
  }

  x = x <= root ? x : number;
  result.push(x);

  return (x === number) ? result : primeFactorization((number / x), result);
};

const primeFactors = (n) => {
  const pFactors = findPrimeFactors(n);
  const factorCounts = pFactors.reduce((acc, x) => ({ ...acc, [x]: (acc[x] + 1 || 1) }), {});
  const resultString = Object.entries(factorCounts).map(([factor, count]) => factor + (count > 1 ? `**${count}` : ''));
  return `(${resultString.join(')(')})`;
};

function findPrimeFactors(num) {
  const factors = [];
  while (num % 2 === 0) {
    factors.push(2);
    num /= 2;
  }

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }

  if (num > 2) {
    factors.push(num);
  }
  return factors;
}
