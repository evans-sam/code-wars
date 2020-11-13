const doubles = (string) => {
  for (let i = 0; i < string.length - 1; i += 1)
    if (string[i] === string[i + 1])
      return doubles(string.slice(0, i) + string.slice(i + 2));

  return string;
};
