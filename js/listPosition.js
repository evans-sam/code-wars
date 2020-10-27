const listPosition = (word) => {
  const letterCounts = (word.split('').reduce((counts, letter) => ({ ...counts, [letter]: (counts[letter] || 0) + 1 }), {}));
  const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
  const nPossibleAnagarams = (
    factorial(word.length)
    / Object
      .values(letterCounts)
      .reduce((product, count) => (product * factorial(count)), 1)
  );

  return nPossibleAnagarams;
};

console.log(listPosition('AAAB'));
console.log(listPosition('BAAA'));
console.log(listPosition('BOOKKEEPER'));
console.log(listPosition('QUESTION'));

export default listPosition;
