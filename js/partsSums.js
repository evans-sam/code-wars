// TOO SLOW

// function partsSums(ls) {
//   const sum = (array) => array.reduce((acc, e) => acc + e);
//   return [...ls.map((_e, i) => sum(ls.slice(i))), 0];
// }

function partsSums(ls) {
  let sum = 0;
  const reducer = (result, element, i) => {
    sum += element;
    result[i] = sum;
    return result;
  };

  return ls.reduceRight(reducer, [...Array(ls.length), 0]);
}

function partsSums(ls) {
  const result = [...Array(ls.length), 0];

  for (let i = ls.length - 1, sum = 0; i >= 0; i -= 1) {
    sum += ls[i];
    result[i] = sum;
  }

  return result;
}

export default partsSums;
