function reverse(n) {
  const digits = Math.floor(Math.log10(n));
  const remainder = Math.floor(n / 10);

  return (n % 10) * (10 ** digits) + (remainder === 0 ? 0 : reverse(remainder));
}

export default reverse;
