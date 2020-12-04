numbers = ['zeroZERO', 'ONEone', 'twoTWO', 'THREEthree', 'fourFOUR', 'FIVEfive', 'sixSIX', 'SEVENseven', 'eightEIGHT', 'NINEnine'].map((string) => string.repeat(3));

conv = (number) => (number+='')
  .replace(/./g, (d, i) => (
    (number.length % 2 == d % 2
      ? numbers[+d].slice(0, i + 1)
      : d)
  ), '');
