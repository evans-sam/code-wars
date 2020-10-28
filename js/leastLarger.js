function leastLarger(array, i) {
  return array
    .indexOf(
      array.reduce((acc, e) => (
        e - array[i] > 0 && e - array[i] < acc - array[i]
          ? e
          : acc
      ), Infinity),
    );
}

const leastLarger = (array, i) => array.indexOf(Math.min(...array.filter((n) => n > array[i])))