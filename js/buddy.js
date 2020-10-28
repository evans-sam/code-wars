const sDivisors = (n) => {
  const factors = new Set([1]);

  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) {
      factors.add(i);
      factors.add(n / i);
    }
  }

  return [...factors].reduce((sum, n) => sum + n);
};

function buddy(start, limit) {
  const result = [];
  for (let i = start + 1; i <= limit; i += 1) {
    const sOfI = sDivisors(i);
    for (let j = i; j <= limit; j += 1) {
      const sOfJ = sDivisors(j);
      if (sOfJ === sOfI + 1) console.log([i, j]);
    }
  }

  return 'Nothing';
}

export default buddy;
