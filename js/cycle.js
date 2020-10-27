function cycle(n) {
  if (n % 2 === 0 || n % 5 === 0) return -1;
  let d = 1;
  let result = 0;

  while (true) {
    d = (d * 10) % n;
    result += 1;

    if (d === 1) return result;
  }
}

export default cycle;

console.log(cycle(33), 2);
console.log(cycle(18118), -1);
console.log(cycle(69), 22);
console.log(cycle(197), 98);
console.log(cycle(65), -1);
