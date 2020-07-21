function createPhoneNumber(numbers) {
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(4,7).join('')}-${numbers.slice(-4).join('')}`;
}

function validParentheses(parens) {
    let count = 0;
    for (i = 0; i < parens.length && count <= 0; i ++ ) {
      parens.slice(i, i + 1) == '(' ? count++ : count--;
      }
    return count === 0;
}
