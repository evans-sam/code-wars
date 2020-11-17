const expandedForm = (num) => num
  .toString()
  .split('')
  .map((d, i, n) => d.padEnd(n.length - i, '0'))
  .filter((e) => +e)
  .join(' + ');
