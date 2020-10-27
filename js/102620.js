function pathFinder(mazeString) {
  const maze = mazeString
    .split('\n')
    .map((wall) => wall.trim().split(''));

  const end = maze.length - 1;

  const pathFind = (i) => (j) => {
    if (i < 0
      || j < 0
      || i > end
      || j > end
      || maze[i][j] !== '.'
    ) return false;

    if (i === end && j === end) return true;

    maze[i][j] = 'x';

    return pathFind(i - 1)(j)
      || pathFind(i)(j + 1)
      || pathFind(i + 1)(j)
      || pathFind(i)(j - 1);
  };

  return pathFind(0)(0);
}



export default pathFinder;
