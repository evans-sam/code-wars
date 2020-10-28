function addArrays(array1, array2) {
  const sum = +array1.join('') + +array2.join('');
  const sign = sum < 0 ? -1 : 1;
  return sum === 0
    ? []
    : Math.abs(sum)
      .toString()
      .split('')
      .map((n, i) => (!i ? sign * n : +n));
}
