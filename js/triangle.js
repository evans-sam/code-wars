const triangle = (row) => (row.length === 1 ? [...row][0] : triangle(
  [...row]
    .map((color, i) => [color, row[i + 1]])
    .slice(0, -1)
    .map(([color1, color2]) => (color1 === color2 ? color1 : ('RBG').replace(color1, '').replace(color2, ''))),
));
