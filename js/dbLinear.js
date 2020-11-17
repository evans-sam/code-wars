const memo = new Set();

function dblLinear(n) {
  memo.add(1);
  let i = Math.floor(memo.size * 0.5);
  while (memo.size <= n * 5) {
    const x = [...memo][i];
    memo.add(2 * x + 1);
    memo.add(3 * x + 1);
    i += 1;
  }

  return [...memo].sort((a, b) => a - b)[n];
}

export default dblLinear;
