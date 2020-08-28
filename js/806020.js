var sum_pairs=function(ints, s){
  let indexes = [ints.length, ints.length];

  for(let i = 0; i < ints.length; i++) {
    for(let j = i + 1; j < ints.length; j++) {
      if(ints[i] + ints[j] === s) {
        if(j < indexes[1]) {
          if(i + j < indexes[0] + indexes[1]) {
            indexes = [i, j];
          }
        }
      }
    }
  }

  const result = [ints[indexes[0]], ints[indexes[1]]];

  return (result[0] === undefined ? undefined : result);

};

const  l1 = [1, 4, 8, 7, 3, 15];

console.log(sum_pairs(l1, 8));