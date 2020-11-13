const narcissistic = (n) => [...n.toString()]
  .reduce((sum, d, _i, s) => sum + ((+d) ** s.length), 0) === n;

const narcissistic = (n) => n
  .toString()
  .split()
  .reduce((sum, d, _i, a) => ((+d) ** a.length) + sum, 0) === n;
