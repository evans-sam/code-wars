function divisors(integer) {
  const divisors = new Set();

  for (let i = 2; i * i <= integer; i += 1) {
    if (integer % i === 0) {
      divisors.add(i);
      divisors.add(integer / i);
    }
  }

  return divisors.size ? [...divisors].sort((a, b) => a - b) : `${integer} is prime`;
}
