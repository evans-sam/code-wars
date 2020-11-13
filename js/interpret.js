const interpret = (worm, directions) => {
  const shift = {
    Up: ([x, y]) => [x, y + 1],
    Down: ([x, y]) => [x, y - 1],
    Left: ([x, y]) => [x - 1, y],
    Right: ([x, y]) => [x + 1, y],
  };

  console.log(worm, directions)

  return directions.reduce((newWorm, direction) => {
    const [newX, newY] = shift[direction](newWorm[0]);
    const newTail = newWorm.slice(0, worm.length - 1);
    return (newTail.find(([x, y]) => x === newX && y === newY) || newWorm[1][0] === newX && newWorm[1][1] === newY
      ? newWorm
      : [[newX, newY], ...newTail]);
  }, worm);
};
