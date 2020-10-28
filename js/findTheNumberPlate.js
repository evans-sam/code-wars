function findTheNumberPlate(customerID) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const sn = ((customerID % 999) + 1).toString().padStart(3, '0');
  const series = Math.floor(customerID / 999);
  const series1 = series % 26;
  const series2 = Math.floor(series / 26) % 26;
  const series3 = Math.floor(series / (26 ** 2));

  return alphabet[series1] + alphabet[series2] + alphabet[series3] + sn;
}

const CONFIG = [
  [3, 'aaa004'],
  [1487, 'baa489'],
  [40000, 'oba041'],
  [17558423, 'zzz999'],
  [234567, 'aja802'],
];

console.log(findTheNumberPlate(CONFIG[0][0]), CONFIG[0][1]);
console.log(findTheNumberPlate(CONFIG[1][0]), CONFIG[1][1]);
console.log(findTheNumberPlate(CONFIG[2][0]), CONFIG[2][1]);
console.log(findTheNumberPlate(CONFIG[3][0]), CONFIG[3][1]);
console.log(findTheNumberPlate(CONFIG[4][0]), CONFIG[4][1]);
