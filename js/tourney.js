const tourney = (array) => {
  if (array.length === 1) return array[0];
  const arr = [];
  for (let i = 0; i < array.length; i += 2) {
    arr.push(array[i] > array[i + 1] ? array[i] : array[i + 1]);
  }

  return tourney(arr);
};

export default tourney;
