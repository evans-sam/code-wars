function disariumNumber(number) {
  const disarium = number
    .toString()
    .split('')
    .reduce((sum, n, i) => sum + (+n) ** (i + 1), 0);

  return disarium === number ? 'Disarium !!' : 'Not !!';
}


console.log(disariumNumber(89),"Disarium !!");
console.log(disariumNumber(564),"Not !!");
console.log(disariumNumber(1024),"Not !!");
console.log(disariumNumber(135),"Disarium !!");
console.log(disariumNumber(136586),"Not !!");
