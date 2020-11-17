const listSquared = (m, n) => {
  const result = [];

  for (let i = m; i < n; i += 1) {
    const divSqSum = divisors(i).reduce((sum, d) => sum + d ** 2, 0);
    if (Math.sqrt(divSqSum) % 1 === 0) result.push([i, divSqSum]);
  }

  return result;
}

const divisors = (n) => {
  const divs = new Set();

  for (let i = 1; i * i <= n; i += 1) {
    if (n % i === 0) {
      divs.add(i);
      divs.add(n / i);
    }
  }

  return [...divs];
}