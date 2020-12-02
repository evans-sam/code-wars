const frogsJumping = (stones) => {
  let path = '';
  let position = stones[stones.length - 1];
  const lake = stones.reduce((acc, stone) => {
    acc[stone] = 1;
    return acc;
  }, [...Array(position + 1)].fill(0));

  while (position > 0) {
    const jump = lake[position - 2] ? 2 : 1;
    path = jump + path;
    position -= jump;
  }

  return path;
};

console.log(frogsJumping([0, 1, 2, 3, 5, 6]) === '1221');
console.log(frogsJumping([0, 2, 4, 6]) === '222');
console.log(frogsJumping([0, 1, 2, 3]) === '12');
console.log(frogsJumping([0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 15, 16, 17]) === '122222222');
console.log(frogsJumping([0, 2, 4, 6, 7, 8, 10, 11, 13, 15, 17, 19, 20, 21, 23]) === '222221222222');
console.log(frogsJumping([0, 1, 2, 4, 5, 7, 9, 11, 13, 14, 15, 16, 18, 20, 21, 22, 23, 24, 26, 28, 30, 31, 32, 33, 35]) === '2212222122222222122');
console.log(frogsJumping([0, 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29, 30, 31, 33, 34, 36, 37, 39, 40]) === '22121212121212121212212121');
console.log(frogsJumping([0, 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29, 31, 32, 34, 35, 37, 38, 40, 41, 43, 44, 46, 47, 49]) === '22121212121212121212121212121212');
