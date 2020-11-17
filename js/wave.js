const wave = (s) => [...Array(s.length)]
  .map((_, i) => s.slice(0, i).toLowerCase()
    + s.slice(i, i + 1).toUpperCase()
    + s.slice(i + 1).toLowerCase())
  .filter((string) => string !== string.toLowerCase());
