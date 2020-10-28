function solve(s) {
  const something = s.match(/\(([^()]+)\)/g);
  const somethingElse = s.match(/\(([^\)]+)\)/);
  const pre = s.match(/^[^(]*\(/, '');
  const post = s.match(/\)[^(]*$/, '');
  const mid = s.match(/\)[^(]*\(/);

  const matches = s.split('(')
    // .filter((v) => v.indexOf(')') > -1)
    .map((value) => value.split(')')[0])
    .map((value) => value.split(''))
    .flat()
    .reduceRight;
  return matches;
}

export default solve;

console.log(solve('3(ab)'), 'ababab');
console.log(solve('2(a3(b))'), 'abbbabbb');
console.log(solve('3(b(2(c)))'), 'bccbccbcc');
console.log(solve('k(a3(b(a2(c))))'), 'kabaccbaccbacc');
