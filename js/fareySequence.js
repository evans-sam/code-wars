function fareySequence(N, m) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const reduce = (n, d) => {
    const D = gcd(n, d);
    return `${n / D}/${d / D}`;
  };

  const sequence = new Set('0/1');
  for (let d = 1; d <= N; d += 1) {
    for (let n = 1; n < d; n += 1) {
      sequence.add(reduce(n, d));
    }
  }
  const fractionsAscending = (a, b) => {
    const [an, ad] = a.split('/').map(Number);
    const [bn, bd] = b.split('/').map(Number);
    return (an / ad) - (bn / bd);
  };
  return [...sequence].sort(fractionsAscending);
}
