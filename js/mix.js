const mix = (s1, s2) => {
  const counts1 = countChars(s1);
  const counts2 = countChars(s2);

  return [...new Set([
    ...Object.keys(counts1),
    ...Object.keys(counts2),
  ])]
    .filter((c) => counts1[c] > 1 || counts2[c] > 1)
    .sort()
    .map((c) => [
      (counts1[c] || 0) > (counts2[c] || 0) ? '1' : (counts2[c] || 0) > (counts1[c] || 0) ? '2' : '=',
      c.repeat((counts1[c] || 0) > (counts2[c] || 0) ? counts1[c] : counts2[c]),
    ])
    .sort(([ac, a], [bc, b]) => (b.length - a.length)
      || ((ac === '1' && '2='.includes(bc)) || (ac === '2' && bc === '=') ? -1 : ac === bc ? 0 : 1)
      || a.localeCompare(b))
    .map((c) => c.join(':'))
    .join('/');
};

const countChars = (string) => string
  .replace(/[^a-z]/g, '')
  .split('')
  .reduce((acc, c) => ({ ...acc, [c]: acc[c] + 1 || 1 }), {});
