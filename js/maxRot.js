
const maxRot = (n) => {
  const rotate = (n, i) => +n
    .toString()
    .split('')
    .slice(i + 1)
    .concat(n.toString().slice(0, i + 1))
    .join('')
  return Math.max(...new Array(n.toString().length + 1)
    .fill(n)
    .map((r, i) => rotate(r, i)))
};

console.log(
  maxRot(56789)
)