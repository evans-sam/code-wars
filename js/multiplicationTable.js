const multiplicationTable = (size) => {
  let table = [[...Array(size + 1).keys()].slice(1)];
  for (let i = 1; i < size; i += 1) {
    table = [
      ...table,
      [...Array(size + 1).keys()].slice(1).map((n, j) => n + table[i - 1][j]),
    ];
  }

  return table;
};

console.log(multiplicationTable(3));
