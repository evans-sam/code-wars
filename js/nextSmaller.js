// function nextSmaller(n) {
//   const permutes = permutations(n.toString())
//     .filter((p) => p[0] != '0')
//     .sort((a , b) => a - b)
//   return  +permutes[permutes.indexOf(n.toString()) - 1] || -1
// }

// function permutations(str) {
//   if (str.length === 1) return str;
//   const permut = [];
//   for (let i = 0; i < str.length; i++) {
//     const s = str[0];
//     const _new = permutations(str.slice(1, str.length));
//     for (let j = 0; j < _new.length; j++) permut.push(s + _new[j]);
//     str = str.substr(1, str.length - 1) + s;
//   }
//   return permut;
// }

// const nextSmaller = (n) => {
//   for (let i = n - 1; i > 0 ; i--) {
//     if (i.toString().sort() === n.toString().sort()) return i
//   }

//   return -1
// }

const nextSmaller = (n) => {
  let x;
  let y;
  let nArray = [...n.toString()].map(Number);
  const right = [];
  if ([...nArray].sort((a, b) => a - b).join('') === n.toString()) return -1;
  for (let i = nArray.length - 1; i >= 0; i -= 1) {
    right.push(nArray[i]);
    const smaller = right.find((d) => d < nArray[i]);
    if (smaller !== undefined) {
      x = i;
      y = nArray.lastIndexOf(smaller);
      break;
    }
  }

  nArray = [
    ...nArray.slice(0, x),
    nArray[y],
    ...nArray.slice(x + 1, y),
    nArray[x],
    ...nArray.slice(y + 1),
  ];
  const result = [
    ...nArray.slice(0, x),
    nArray[x],
    ...nArray.slice(x + 1).sort((a, b) => +b - +a),
  ];

  return result[0] === 0 ? -1 : +result.join('');
};

console.log(nextSmaller(21), 12);
console.log(nextSmaller(907), 790);
console.log(nextSmaller(531), 513);
console.log(nextSmaller(135), -1);
console.log(nextSmaller(2071), 2017);
console.log(nextSmaller(1027), -1);
console.log(nextSmaller(414), 144);
console.log(nextSmaller(123456798), 123456789);
console.log(nextSmaller(123456789), -1);
console.log(nextSmaller(1234567908), 1234567890);
console.log(nextSmaller(1207), 1072);
