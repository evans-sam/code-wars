// function pascalsTriangle(n) {
//   const f = (x) => (x > 1 ? x * f(x - 1) : x);
//   const triangle = [...Array(n)]
//     .map((_, n) => [...Array(n + 1)]
//       .map((_, k) => (n > 0 && n - k > 0 && k > 0 ? f(n) / (f(k) * f(n - k)) : 1)));
//   return triangle.flat();
// }

function pascalsTriangle(n) {
  const f = (x) => (x > 1 ? x * f(x - 1) : x);
  const triangle = [...Array(n)].map((_, i) => [...Array(i + 1).fill(1)]);

  for (let i = 1; i < triangle.length; i += 1) {
    for (let j = 1; j < triangle[i].length - 1; j += 1) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  return triangle
}

function pascalsTriangle(n) {
  const triangle = [[1]];

  for (let i = 1; i < n; i += 1) {
    triangle.push([1]);
    for (let j = 1; j < i; j += 1) {
      triangle[i].push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    triangle[i].push(1);
  }

  return triangle;
}

console.log(pascalsTriangle(25));
