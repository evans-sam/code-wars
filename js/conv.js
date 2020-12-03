const numbers = ['zeroZERO', 'ONEone', 'twoTWO', 'THREEthree', 'fourFOUR', 'FIVEfive', 'sixSIX', 'SEVENseven', 'eightEIGHT', 'NINEnine']
  .map((string) => string.repeat(3));

const conv = (number) => [...number.toString()]
  .reduce((result, d, i, a) => (
    result
    + (a.length % 2 === d % 2
      ? numbers[d].slice(0, i + 1)
      : d)
  ), '');
