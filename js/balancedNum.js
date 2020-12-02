const balancedNum = (num) => {
  const numString = num.toString();
  const e = Math.abs((numString.length % 2) - 1);
  const left = numString.slice(0, Math.floor(numString.length / 2 - e));
  const right = numString.slice(Math.ceil(numString.length / 2 + e));
  const sum = (string) => [...string].reduce((s, d) => +d + s, 0);
  return sum(left) === sum(right) ? 'Balanced' : 'Not Balanced';
};

console.log(balancedNum(7), 'Balanced');
console.log(balancedNum(959), 'Balanced');
console.log(balancedNum(13), 'Balanced');
console.log(balancedNum(432), 'Not Balanced');
console.log(balancedNum(424), 'Balanced');
console.log(balancedNum(1024), 'Not Balanced');
console.log(balancedNum(66545), 'Not Balanced');
console.log(balancedNum(295591), 'Not Balanced');
console.log(balancedNum(1230987), 'Not Balanced');
console.log(balancedNum(56239814), 'Balanced');
