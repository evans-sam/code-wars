const solve = (string) => ([...string].reduce((acc, c) => (c.toLowerCase() === c ? acc - 1 : acc + 1), 0) > 0 ? string.toUpperCase() : string.toLowerCase());
