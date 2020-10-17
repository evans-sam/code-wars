function hamming(n) {
  let uglies = [1];
  let i = 0, j = 0, k = 0;
  let x2 = 2, x3 = 3, x5 = 5;

  while (uglies.length < n) {        
    let min = Math.min(x2, x3, x5);
    uglies.push(min);
    if (x2 === min) x2 = 2 * uglies[++i];
    if (x3 === min) x3 = 3 * uglies[++j];
    if (x5 === min) x5 = 5 * uglies[++k];       
  }

  return uglies.pop();
}

const factorial = n => {
  if(n < 0) return null

  return [...Array(n).keys()]
    .map(x => x.toString())
    .slice(1)
    .reverse()
    .reduce((product, value) => multiply(product)(value), n.toString())
}

const factorial = (n) =>{
  return n > 1
    ? multiply(factorial(n - 1))(n.toString())
    : '1'
} 

const multiply = stringA => {
  return b => {
    let carry = 0

    const result = stringA
      .split('')
      .reduceRight((product, a) => {
        const p = +a * b + carry
        carry = Math.floor(p / 10)
        return [ p % 10, ...product ]
      }, [])

    return [carry ? carry : '']
      .concat(result)
      .join('')
  }
}




console.log('****** ', factorial(0), 'null', '0!');
console.log('****** ', factorial(1), '1', '1!');
console.log('****** ', factorial(5), '120', '5!');
console.log('****** ', factorial(9), '362880', '9!');
console.log('****** ', factorial(15), '1307674368000', '15!');


// console.log(multiply('25')('625'))
// console.log(add('25','625'))
// console.log(multiply('625')('625'))




