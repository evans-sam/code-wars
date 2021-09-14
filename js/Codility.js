// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const occurrences = Object.values(S
    .split('')
    .reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {}))
    .sort((a, b) => b - a);
  let exp = occurrences[0];
  return occurrences.reduce((deletions, n) => {
    if (n > exp) deletions += n - exp;
    else exp = n;

    return deletions;
  }, 0);
}
