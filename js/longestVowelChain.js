const solve = (string) => string
  .split(/[^aeiou]/)
  .reduce((max, s) => (s.length > max ? s.length : max), 0);
