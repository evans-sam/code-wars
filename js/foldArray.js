// const foldArray = (array, runs) => {
//   if (runs === 0) return array;
//   const [leftStop, rightStop] = [Math.floor(array.length / 2), Math.ceil(array.length / 2)];
//   const left = array.slice(0, leftStop);
//   const mid = array.slice(leftStop, rightStop);
//   const right = array.slice(rightStop).reverse();
//   return foldArray([...left.map((e, i) => e + right[i]), ...mid], runs - 1);
// };

const foldArray = (array, runs) => (runs === 0 ? array : foldArray(array
  .slice(0, array.length / 2)
  .reduce((acc, e, i) => [...acc, e + (array[array.length - i - 1] || 0)], [])
  .concat(array.slice(Math.floor(array.length / 2), Math.ceil(array.length / 2))), runs - 1));

let input = [1, 2, 3, 4, 5];
let expected = [6, 6, 3];
console.log(foldArray(input, 1), expected);

expected = [9, 6];
console.log(foldArray(input, 2), expected);

expected = [15];
console.log(foldArray(input, 3), expected);

input = [-9, 9, -8, 8, 66, 23];
expected = [14, 75, 0];
console.log(foldArray(input, 1), expected);
