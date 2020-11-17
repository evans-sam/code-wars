const solution = (str) => [...Array(Math.ceil(str.length / 2))]
  .map((e, i) => str[i * 2] + (str[i * 2 + 1] || '_'));
