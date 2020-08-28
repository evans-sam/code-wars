function josephusSurvivor(n,k) {
  const arr = [...Array(n).keys()].map(i => i+ 1);
  return reduceArr(arr, k);
}

function reduceArr(arr, k) {
  arr.splice(k-1, 1);
  console.log(arr)
  k = k + k;
  k > arr.length 
    ? k = k % arr.length
    : k;
  console.log(k);
}

josephusSurvivor(7,3);
