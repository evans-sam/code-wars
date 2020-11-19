const solution = (inputString) => {
  const blocks = inputString
    .split(' ')
    .map((block) => [+block[0], +block[1]]);

  return blocks;
}