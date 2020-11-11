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

const decomp = (n) => {
  const factorial = (x) => (x === 1 ? x : x * factorial(x - 1));
  const primeFactors = findPrimeFactors(factorial(n));
  const factorCounts = primeFactors.reduce((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
  const resultString = Object.keys(factorCounts).map((factor) => factor + (factorCounts[factor] > 1 ? `^${factorCounts[factor]}` : ''));
  return resultString.join(' * ');
};

function findPrimeFactors(num) {
  const primeFactors = [];
  while (num % 2 === 0) {
    primeFactors.push(2);
    num /= 2;
  }

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }

  if (num > 2) {
    primeFactors.push(num);
  }
  return primeFactors;
}
