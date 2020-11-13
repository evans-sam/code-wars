const waveSort = (array) => {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i += 2) {
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
  }
};
