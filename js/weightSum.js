function powerSet(str) {
  const obj = {};

  for (let i = 0; i < str.length; i += 1) {
    obj[str[i]] = true;
  }
  const array = Object.keys(obj);
  const result = [[]];
  for (let i = 0; i < array.length; i += 1) {
    const len = result.length;
    for (let x = 0; x < len; x += 1) {
      result.push(result[x].concat(array[i]));
    }
  }
  return result;
}

function weightSum(arr) {
  console.log(powerSet(arr.join('')));
  return 0;
}


weightSum(new Uint8Array([1])) === 1
weightSum(new Uint8Array([0])) === 0
weightSum(new Uint8Array([0,0,0,0,0])) === 0
weightSum(new Uint8Array([1,1,1,1,1])) === 31
weightSum(new Uint8Array([1,1,0,1])) === 17
weightSum(Uint8Array.from('1100011100111', x => +x)) === 18219