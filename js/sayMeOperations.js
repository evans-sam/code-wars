const sayMeOperations = (string) => {
  const add = (a) => (b) => (c) => (a + b === c ? 'addition' : false);
  const sub = (a) => (b) => (c) => (a - b === c ? 'subtraction' : false);
  const mul = (a) => (b) => (c) => (a * b === c ? 'multiplication' : false);
  // const div = (a) => (b) => (c) => (parseInt(a / b) === c ? 'division' : false);
  const op = (a) => (b) => (c) => add(a)(b)(c) || sub(a)(b)(c) || mul(a)(b)(c) || 'division';
  const numbers = string.split(' ').map(Number);
  const operations = numbers.slice(2).map((n, i) => op(numbers[i])(numbers[i + 1])(n));

  return operations.join(', ');
};
