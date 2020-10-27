function anagrams(word, words) {
  const isAnagram = (word1) => (word2) => (word1.split('').sort().join('') === word2.split('').sort().join(''));

  return words.filter((element) => isAnagram(word)(element));
}

const memo = [];

function sum(n, m = n) {
  if (n === 0) return 1;
  if (n < 0 || m === 0) return 0;
  if (memo[n] && memo[n][m]) return memo[n][m];
  const total = sum(n, m - 1) + sum(n - m, m);
  if (!memo[n]) {
    memo[n] = [];
  }
  memo[n][m] = total;
  return total;
}

export { anagrams, sum };
